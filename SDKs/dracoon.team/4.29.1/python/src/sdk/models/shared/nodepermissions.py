from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodePermissions:
    change: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'change' }})
    create: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create' }})
    delete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete' }})
    delete_recycle_bin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteRecycleBin' }})
    manage: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manage' }})
    manage_download_share: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manageDownloadShare' }})
    manage_upload_share: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manageUploadShare' }})
    read: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    read_recycle_bin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readRecycleBin' }})
    restore_recycle_bin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreRecycleBin' }})
    
