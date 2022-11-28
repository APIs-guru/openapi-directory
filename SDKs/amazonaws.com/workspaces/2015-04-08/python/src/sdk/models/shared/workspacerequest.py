from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkspaceRequest:
    r"""WorkspaceRequest
    Describes the information used to create a WorkSpace.
    """
    
    bundle_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BundleId') }})
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    root_volume_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootVolumeEncryptionEnabled') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    user_volume_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserVolumeEncryptionEnabled') }})
    volume_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeEncryptionKey') }})
    workspace_properties: Optional[WorkspaceProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspaceProperties') }})
    
