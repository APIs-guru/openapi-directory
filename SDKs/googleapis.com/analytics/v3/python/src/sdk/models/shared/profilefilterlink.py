from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filterref
from . import profileref


@dataclass_json
@dataclass
class ProfileFilterLink:
    filter_ref: Optional[filterref.FilterRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterRef' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    profile_ref: Optional[profileref.ProfileRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileRef' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
