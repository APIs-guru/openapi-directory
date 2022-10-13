from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scriptstackframe


@dataclass_json
@dataclass
class ScriptStatistics:
    evaluation_kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationKind' }})
    stack_frames: Optional[List[scriptstackframe.ScriptStackFrame]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackFrames' }})
    
