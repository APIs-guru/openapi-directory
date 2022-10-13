from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountdto


@dataclass_json
@dataclass
class PageResultAccountDto:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    items: Optional[List[accountdto.AccountDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    next_page_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageLink' }})
    
