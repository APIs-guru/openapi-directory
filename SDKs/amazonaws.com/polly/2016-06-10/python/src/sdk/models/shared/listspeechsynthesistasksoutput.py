from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import synthesistask


@dataclass_json
@dataclass
class ListSpeechSynthesisTasksOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    synthesis_tasks: Optional[List[synthesistask.SynthesisTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SynthesisTasks' }})
    
