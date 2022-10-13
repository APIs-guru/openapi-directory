from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import candidatesearch


@dataclass_json
@dataclass
class CandidateSearchList:
    results: Optional[List[candidatesearch.CandidateSearch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
