from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import humanloopactivationoutput
from . import moderationlabel


@dataclass_json
@dataclass
class DetectModerationLabelsResponse:
    human_loop_activation_output: Optional[humanloopactivationoutput.HumanLoopActivationOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopActivationOutput' }})
    moderation_labels: Optional[List[moderationlabel.ModerationLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModerationLabels' }})
    moderation_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModerationModelVersion' }})
    
