from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import committeesearch


@dataclass_json
@dataclass
class CommitteeSearchList:
    results: Optional[List[committeesearch.CommitteeSearch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
