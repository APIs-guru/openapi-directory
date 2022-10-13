from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import modificationstate
from . import workspacestate_enum
from . import workspaceproperties


@dataclass_json
@dataclass
class Workspace:
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleId' }})
    computer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputerName' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    modification_states: Optional[List[modificationstate.ModificationState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModificationStates' }})
    root_volume_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootVolumeEncryptionEnabled' }})
    state: Optional[workspacestate_enum.WorkspaceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    user_volume_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserVolumeEncryptionEnabled' }})
    volume_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeEncryptionKey' }})
    workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceId' }})
    workspace_properties: Optional[workspaceproperties.WorkspaceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceProperties' }})
    
