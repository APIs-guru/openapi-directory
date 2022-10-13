from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import synthesistask


@dataclass_json
@dataclass
class GetSpeechSynthesisTaskOutput:
    synthesis_task: Optional[synthesistask.SynthesisTask] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SynthesisTask' }})
    
