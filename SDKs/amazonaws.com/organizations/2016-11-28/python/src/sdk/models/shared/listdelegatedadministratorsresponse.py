from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import delegatedadministrator


@dataclass_json
@dataclass
class ListDelegatedAdministratorsResponse:
    delegated_administrators: Optional[List[delegatedadministrator.DelegatedAdministrator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DelegatedAdministrators' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
