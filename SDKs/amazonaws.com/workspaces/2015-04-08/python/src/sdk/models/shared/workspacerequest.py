from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import workspaceproperties


@dataclass_json
@dataclass
class WorkspaceRequest:
    bundle_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BundleId' }})
    directory_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    root_volume_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootVolumeEncryptionEnabled' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    user_volume_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserVolumeEncryptionEnabled' }})
    volume_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeEncryptionKey' }})
    workspace_properties: Optional[workspaceproperties.WorkspaceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceProperties' }})
    
