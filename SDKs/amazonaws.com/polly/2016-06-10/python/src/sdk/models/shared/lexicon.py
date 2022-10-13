from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Lexicon:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
