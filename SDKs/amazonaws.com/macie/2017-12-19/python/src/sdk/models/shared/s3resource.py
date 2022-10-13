from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Resource:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    
