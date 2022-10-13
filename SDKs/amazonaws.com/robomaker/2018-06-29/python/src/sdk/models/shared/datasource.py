from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3keyoutput


@dataclass_json
@dataclass
class DataSource:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    s3_keys: Optional[List[s3keyoutput.S3KeyOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Keys' }})
    
