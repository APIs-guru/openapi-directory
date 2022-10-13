from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CheckpointConfig:
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalPath' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
