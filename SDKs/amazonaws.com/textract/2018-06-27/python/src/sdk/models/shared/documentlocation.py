from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3object


@dataclass_json
@dataclass
class DocumentLocation:
    s3_object: Optional[s3object.S3Object] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Object' }})
    
