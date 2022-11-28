from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UploadStatusStatusEnum(str, Enum):
    UPLOADING = "UPLOADING"
    INVALID = "INVALID"
    PENDING = "PENDING"
    INBOX = "INBOX"
    DECLINED = "DECLINED"
    IMPORTING = "IMPORTING"
    SUCCESS = "SUCCESS"


@dataclass_json
@dataclass
class UploadStatus:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: UploadStatusStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
