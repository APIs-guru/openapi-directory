from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Layout
    Describes the layout information of a text_segment in the document.
    """
    
    bounding_poly: Optional[BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    text_segment: Optional[TextSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSegment') }})
    text_segment_type: Optional[LayoutTextSegmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSegmentType') }})
    
