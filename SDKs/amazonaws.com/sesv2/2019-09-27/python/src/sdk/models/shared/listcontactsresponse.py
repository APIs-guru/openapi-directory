from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contact


@dataclass_json
@dataclass
class ListContactsResponse:
    contacts: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Contacts' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
