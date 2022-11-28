from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateModelPackageInput:
    certify_for_marketplace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertifyForMarketplace') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    inference_specification: Optional[InferenceSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSpecification') }})
    metadata_properties: Optional[MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataProperties') }})
    model_approval_status: Optional[ModelApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelApprovalStatus') }})
    model_metrics: Optional[ModelMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelMetrics') }})
    model_package_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageDescription') }})
    model_package_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupName') }})
    model_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageName') }})
    source_algorithm_specification: Optional[SourceAlgorithmSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAlgorithmSpecification') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    validation_specification: Optional[ModelPackageValidationSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationSpecification') }})
    
