from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import answer


@dataclass_json
@dataclass
class UpdateAnswerOutput:
    answer: Optional[answer.Answer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Answer' }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensAlias' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    
