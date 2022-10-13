from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3ObjectSource:
    bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
