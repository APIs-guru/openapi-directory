from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import keyvalueentry


@dataclass_json
@dataclass
class UserAttributes:
    items: List[keyvalueentry.KeyValueEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
