from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import processings3uploadmode_enum


@dataclass_json
@dataclass
class ProcessingS3Output:
    local_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalPath' }})
    s3_upload_mode: processings3uploadmode_enum.ProcessingS3UploadModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3UploadMode' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
