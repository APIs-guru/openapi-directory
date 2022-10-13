from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeyRange:
    begin_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginMarker' }})
    end_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndMarker' }})
    
