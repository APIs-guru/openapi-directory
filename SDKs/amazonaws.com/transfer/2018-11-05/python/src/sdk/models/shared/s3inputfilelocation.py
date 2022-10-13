from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3InputFileLocation:
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bucket' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    
