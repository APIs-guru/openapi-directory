from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Instance:
    r"""Instance
    An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>).
    """
    
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    
