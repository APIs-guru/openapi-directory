from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HovercardContexts:
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    octicon: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'octicon' }})
    

@dataclass_json
@dataclass
class Hovercard:
    contexts: List[HovercardContexts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    
