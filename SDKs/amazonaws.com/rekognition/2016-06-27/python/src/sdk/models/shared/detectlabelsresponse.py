from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectLabelsResponse:
    label_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelModelVersion') }})
    labels: Optional[List[Label]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Labels') }})
    orientation_correction: Optional[OrientationCorrectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrientationCorrection') }})
    
