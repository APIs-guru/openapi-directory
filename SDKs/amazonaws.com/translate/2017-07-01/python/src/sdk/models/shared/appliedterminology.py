from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import term


@dataclass_json
@dataclass
class AppliedTerminology:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    terms: Optional[List[term.Term]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Terms' }})
    
