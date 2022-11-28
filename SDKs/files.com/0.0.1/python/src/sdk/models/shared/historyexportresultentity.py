from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HistoryExportResultEntity:
    r"""HistoryExportResultEntity
    List History Export Results
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    failure_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure_type') }})
    file_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_id') }})
    folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    target_expires_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_expires_at') }})
    target_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_id') }})
    target_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_name') }})
    target_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_permission') }})
    target_permission_set: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_permission_set') }})
    target_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_platform') }})
    target_recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_recursive') }})
    target_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_user_id') }})
    target_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_username') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
