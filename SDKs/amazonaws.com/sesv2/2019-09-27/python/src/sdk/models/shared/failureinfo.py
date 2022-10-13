from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FailureInfo:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    failed_records_s3_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedRecordsS3Url' }})
    
