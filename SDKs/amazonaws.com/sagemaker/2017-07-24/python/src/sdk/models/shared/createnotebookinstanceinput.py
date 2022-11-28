from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateNotebookInstanceInput:
    instance_type: InstanceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    notebook_instance_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotebookInstanceName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    accelerator_types: Optional[List[NotebookInstanceAcceleratorTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorTypes') }})
    additional_code_repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalCodeRepositories') }})
    default_code_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultCodeRepository') }})
    direct_internet_access: Optional[DirectInternetAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectInternetAccess') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecycleConfigName') }})
    platform_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlatformIdentifier') }})
    root_access: Optional[RootAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootAccess') }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    volume_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeSizeInGB') }})
    
