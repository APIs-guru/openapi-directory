from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import doublecandidates
from . import doublerange


@dataclass_json
@dataclass
class DoubleHparamSearchSpace:
    candidates: Optional[doublecandidates.DoubleCandidates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidates' }})
    range: Optional[doublerange.DoubleRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
