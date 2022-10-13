from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import association


@dataclass_json
@dataclass
class ListAssociationsResult:
    associations: Optional[List[association.Association]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Associations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
