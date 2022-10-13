from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import account


@dataclass_json
@dataclass
class ListChildAccountsResponse:
    accounts: Optional[List[account.Account]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
