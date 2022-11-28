from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DetectModerationLabelsResponse:
    human_loop_activation_output: Optional[HumanLoopActivationOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationOutput') }})
    moderation_labels: Optional[List[ModerationLabel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModerationLabels') }})
    moderation_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModerationModelVersion') }})
    
