from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import notebookinstanceacceleratortype_enum
from . import directinternetaccess_enum
from . import instancetype_enum
from . import rootaccess_enum
from . import tag


@dataclass_json
@dataclass
class CreateNotebookInstanceInput:
    accelerator_types: Optional[List[notebookinstanceacceleratortype_enum.NotebookInstanceAcceleratorTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorTypes' }})
    additional_code_repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalCodeRepositories' }})
    default_code_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultCodeRepository' }})
    direct_internet_access: Optional[directinternetaccess_enum.DirectInternetAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectInternetAccess' }})
    instance_type: instancetype_enum.InstanceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecycleConfigName' }})
    notebook_instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceName' }})
    platform_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformIdentifier' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    root_access: Optional[rootaccess_enum.RootAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootAccess' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupIds' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    volume_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeSizeInGB' }})
    
