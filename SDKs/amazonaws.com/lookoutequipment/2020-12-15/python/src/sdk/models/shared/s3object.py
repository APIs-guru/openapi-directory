from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Object:
    bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bucket' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    
