from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextDetection:
    r"""TextDetection
    <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p>
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    detected_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectedText') }})
    geometry: Optional[Geometry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentId') }})
    type: Optional[TextTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
