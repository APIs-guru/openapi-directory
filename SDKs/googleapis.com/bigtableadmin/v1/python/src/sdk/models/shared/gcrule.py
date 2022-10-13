from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import intersection
from . import union


@dataclass_json
@dataclass
class GcRule:
    intersection: Optional[intersection.Intersection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intersection' }})
    max_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAge' }})
    max_num_versions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumVersions' }})
    union: Optional[union.Union] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'union' }})
    
