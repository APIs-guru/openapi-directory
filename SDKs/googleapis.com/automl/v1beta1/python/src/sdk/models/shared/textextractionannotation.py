from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textsegment


@dataclass_json
@dataclass
class TextExtractionAnnotation:
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    text_segment: Optional[textsegment.TextSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSegment' }})
    
