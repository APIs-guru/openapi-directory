from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import inferencespecification
from . import usercontext
from . import metadataproperties
from . import modelapprovalstatus_enum
from . import modelmetrics
from . import modelpackagestatus_enum
from . import modelpackagestatusdetails
from . import sourcealgorithmspecification
from . import tag
from . import modelpackagevalidationspecification


@dataclass_json
@dataclass
class ModelPackage:
    approval_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalDescription' }})
    certify_for_marketplace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertifyForMarketplace' }})
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inference_specification: Optional[inferencespecification.InferenceSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSpecification' }})
    last_modified_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metadata_properties: Optional[metadataproperties.MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataProperties' }})
    model_approval_status: Optional[modelapprovalstatus_enum.ModelApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelApprovalStatus' }})
    model_metrics: Optional[modelmetrics.ModelMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelMetrics' }})
    model_package_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageArn' }})
    model_package_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageDescription' }})
    model_package_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupName' }})
    model_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageName' }})
    model_package_status: Optional[modelpackagestatus_enum.ModelPackageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageStatus' }})
    model_package_status_details: Optional[modelpackagestatusdetails.ModelPackageStatusDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageStatusDetails' }})
    model_package_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageVersion' }})
    source_algorithm_specification: Optional[sourcealgorithmspecification.SourceAlgorithmSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceAlgorithmSpecification' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    validation_specification: Optional[modelpackagevalidationspecification.ModelPackageValidationSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationSpecification' }})
    
