from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import archivedresult


@dataclass_json
@dataclass
class AvailabilityResults:
    results: List[archivedresult.ArchivedResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
