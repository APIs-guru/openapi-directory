from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NodePermissions:
    r"""NodePermissions
    Node permissions
    """
    
    change: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('change') }})
    create: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('create') }})
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    delete_recycle_bin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteRecycleBin') }})
    manage: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manage') }})
    manage_download_share: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manageDownloadShare') }})
    manage_upload_share: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manageUploadShare') }})
    read: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    read_recycle_bin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('readRecycleBin') }})
    restore_recycle_bin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreRecycleBin') }})
    
