from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publisheraccount


@dataclass_json
@dataclass
class ListPublisherAccountsResponse:
    account: Optional[List[publisheraccount.PublisherAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
