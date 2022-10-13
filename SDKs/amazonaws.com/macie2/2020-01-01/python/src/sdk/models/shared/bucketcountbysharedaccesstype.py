from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BucketCountBySharedAccessType:
    external: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external' }})
    internal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internal' }})
    not_shared: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notShared' }})
    unknown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknown' }})
    
