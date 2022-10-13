from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3tag


@dataclass_json
@dataclass
class TagStepDetails:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[List[s3tag.S3Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
