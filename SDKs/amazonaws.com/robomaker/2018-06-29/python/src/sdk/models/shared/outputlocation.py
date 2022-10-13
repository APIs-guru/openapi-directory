from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OutputLocation:
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Prefix' }})
    
