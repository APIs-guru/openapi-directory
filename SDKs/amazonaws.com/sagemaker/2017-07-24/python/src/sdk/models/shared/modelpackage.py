from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelPackage:
    r"""ModelPackage
    A versioned model that can be deployed for SageMaker inference.
    """
    
    approval_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalDescription') }})
    certify_for_marketplace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertifyForMarketplace') }})
    created_by: Optional[UserContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inference_specification: Optional[InferenceSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSpecification') }})
    last_modified_by: Optional[UserContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedBy') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metadata_properties: Optional[MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataProperties') }})
    model_approval_status: Optional[ModelApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelApprovalStatus') }})
    model_metrics: Optional[ModelMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelMetrics') }})
    model_package_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageArn') }})
    model_package_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageDescription') }})
    model_package_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupName') }})
    model_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageName') }})
    model_package_status: Optional[ModelPackageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageStatus') }})
    model_package_status_details: Optional[ModelPackageStatusDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageStatusDetails') }})
    model_package_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageVersion') }})
    source_algorithm_specification: Optional[SourceAlgorithmSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAlgorithmSpecification') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    validation_specification: Optional[ModelPackageValidationSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationSpecification') }})
    
