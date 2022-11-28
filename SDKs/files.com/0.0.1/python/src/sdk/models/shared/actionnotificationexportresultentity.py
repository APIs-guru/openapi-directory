from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActionNotificationExportResultEntity:
    r"""ActionNotificationExportResultEntity
    List Action Notification Export Results
    """
    
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    request_headers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_headers') }})
    request_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_method') }})
    request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_url') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
