from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3resource


@dataclass_json
@dataclass
class FailedS3Resource:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    failed_item: Optional[s3resource.S3Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedItem' }})
    
