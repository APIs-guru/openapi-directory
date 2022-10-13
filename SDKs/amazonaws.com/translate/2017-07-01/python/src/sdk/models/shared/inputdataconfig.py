from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InputDataConfig:
    content_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
