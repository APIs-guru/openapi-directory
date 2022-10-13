from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Object:
    bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
