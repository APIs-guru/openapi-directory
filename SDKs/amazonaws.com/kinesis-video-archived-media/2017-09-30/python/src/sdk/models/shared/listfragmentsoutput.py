from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fragment


@dataclass_json
@dataclass
class ListFragmentsOutput:
    fragments: Optional[List[fragment.Fragment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fragments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
