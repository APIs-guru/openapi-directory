from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parent
from . import parent


@dataclass_json
@dataclass
class Move:
    added_parents: Optional[List[parent.Parent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedParents' }})
    removed_parents: Optional[List[parent.Parent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removedParents' }})
    
