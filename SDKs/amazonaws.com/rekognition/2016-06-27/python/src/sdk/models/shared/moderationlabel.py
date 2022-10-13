from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModerationLabel:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Confidence' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentName' }})
    
