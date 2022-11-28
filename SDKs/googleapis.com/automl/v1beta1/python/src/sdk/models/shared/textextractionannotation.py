from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextExtractionAnnotation:
    r"""TextExtractionAnnotation
    Annotation for identifying spans of text.
    """
    
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    text_segment: Optional[TextSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textSegment') }})
    
