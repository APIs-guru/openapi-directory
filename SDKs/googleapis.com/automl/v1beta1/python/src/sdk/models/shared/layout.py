from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import boundingpoly
from . import textsegment

class LayoutTextSegmentTypeEnum(str, Enum):
    TEXT_SEGMENT_TYPE_UNSPECIFIED = "TEXT_SEGMENT_TYPE_UNSPECIFIED"
    TOKEN = "TOKEN"
    PARAGRAPH = "PARAGRAPH"
    FORM_FIELD = "FORM_FIELD"
    FORM_FIELD_NAME = "FORM_FIELD_NAME"
    FORM_FIELD_CONTENTS = "FORM_FIELD_CONTENTS"
    TABLE = "TABLE"
    TABLE_HEADER = "TABLE_HEADER"
    TABLE_ROW = "TABLE_ROW"
    TABLE_CELL = "TABLE_CELL"


@dataclass_json
@dataclass
class Layout:
    bounding_poly: Optional[boundingpoly.BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    text_segment: Optional[textsegment.TextSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSegment' }})
    text_segment_type: Optional[LayoutTextSegmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSegmentType' }})
    
