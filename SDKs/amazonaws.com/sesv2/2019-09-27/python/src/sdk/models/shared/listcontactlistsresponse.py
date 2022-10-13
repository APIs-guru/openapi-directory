from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactlist


@dataclass_json
@dataclass
class ListContactListsResponse:
    contact_lists: Optional[List[contactlist.ContactList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactLists' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
