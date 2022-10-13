from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import humanloopconfig
from . import image


@dataclass_json
@dataclass
class DetectModerationLabelsRequest:
    human_loop_config: Optional[humanloopconfig.HumanLoopConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopConfig' }})
    image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    min_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinConfidence' }})
    
