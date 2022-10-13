from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OcrWordElement:
    block_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockNumber' }})
    confidence_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfidenceLevel' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineNumber' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageNumber' }})
    paragraph_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParagraphNumber' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    word_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WordNumber' }})
    word_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WordText' }})
    x_left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XLeft' }})
    y_top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'YTop' }})
    
