from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DataSourceConfig:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    s3_bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    s3_keys: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Keys' }})
    
