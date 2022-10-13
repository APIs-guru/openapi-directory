from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3KeyOutput:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Key' }})
    
