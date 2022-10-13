from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lexiconattributes


@dataclass_json
@dataclass
class LexiconDescription:
    attributes: Optional[lexiconattributes.LexiconAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
