from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

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
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: UploadStatusStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
