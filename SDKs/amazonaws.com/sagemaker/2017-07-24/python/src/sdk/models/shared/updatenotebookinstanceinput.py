from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import notebookinstanceacceleratortype_enum
from . import instancetype_enum
from . import rootaccess_enum


@dataclass_json
@dataclass
class UpdateNotebookInstanceInput:
    accelerator_types: Optional[List[notebookinstanceacceleratortype_enum.NotebookInstanceAcceleratorTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceleratorTypes' }})
    additional_code_repositories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalCodeRepositories' }})
    default_code_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultCodeRepository' }})
    disassociate_accelerator_types: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisassociateAcceleratorTypes' }})
    disassociate_additional_code_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisassociateAdditionalCodeRepositories' }})
    disassociate_default_code_repository: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisassociateDefaultCodeRepository' }})
    disassociate_lifecycle_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisassociateLifecycleConfig' }})
    instance_type: Optional[instancetype_enum.InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    lifecycle_config_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecycleConfigName' }})
    notebook_instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    root_access: Optional[rootaccess_enum.RootAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootAccess' }})
    volume_size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeSizeInGB' }})
    
