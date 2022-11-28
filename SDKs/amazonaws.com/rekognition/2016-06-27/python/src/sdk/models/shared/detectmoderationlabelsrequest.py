from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectModerationLabelsRequest:
    image: Image = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    human_loop_config: Optional[HumanLoopConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopConfig') }})
    min_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinConfidence') }})
    
