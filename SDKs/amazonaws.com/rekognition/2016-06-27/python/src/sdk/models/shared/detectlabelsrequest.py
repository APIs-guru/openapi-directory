from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectLabelsRequest:
    image: Image = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    max_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxLabels') }})
    min_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinConfidence') }})
    
