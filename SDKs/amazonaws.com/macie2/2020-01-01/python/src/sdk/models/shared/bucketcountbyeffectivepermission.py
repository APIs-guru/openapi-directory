from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BucketCountByEffectivePermission:
    publicly_accessible: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publiclyAccessible' }})
    publicly_readable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publiclyReadable' }})
    publicly_writable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publiclyWritable' }})
    unknown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unknown' }})
    
