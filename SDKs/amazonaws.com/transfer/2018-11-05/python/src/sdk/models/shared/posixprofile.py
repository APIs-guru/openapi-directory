from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PosixProfile:
    gid: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gid' }})
    secondary_gids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryGids' }})
    uid: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Uid' }})
    
