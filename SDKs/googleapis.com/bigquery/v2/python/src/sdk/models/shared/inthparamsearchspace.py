from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import intcandidates
from . import intrange


@dataclass_json
@dataclass
class IntHparamSearchSpace:
    candidates: Optional[intcandidates.IntCandidates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidates' }})
    range: Optional[intrange.IntRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
