from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import inferencespecification
from . import metadataproperties
from . import modelapprovalstatus_enum
from . import modelmetrics
from . import sourcealgorithmspecification
from . import tag
from . import modelpackagevalidationspecification


@dataclass_json
@dataclass
class CreateModelPackageInput:
    certify_for_marketplace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CertifyForMarketplace' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    inference_specification: Optional[inferencespecification.InferenceSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSpecification' }})
    metadata_properties: Optional[metadataproperties.MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataProperties' }})
    model_approval_status: Optional[modelapprovalstatus_enum.ModelApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelApprovalStatus' }})
    model_metrics: Optional[modelmetrics.ModelMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelMetrics' }})
    model_package_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageDescription' }})
    model_package_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupName' }})
    model_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageName' }})
    source_algorithm_specification: Optional[sourcealgorithmspecification.SourceAlgorithmSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceAlgorithmSpecification' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    validation_specification: Optional[modelpackagevalidationspecification.ModelPackageValidationSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationSpecification' }})
    
