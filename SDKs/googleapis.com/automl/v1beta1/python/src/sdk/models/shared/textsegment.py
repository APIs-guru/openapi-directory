from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TextSegment:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    end_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endOffset' }})
    start_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startOffset' }})
    
