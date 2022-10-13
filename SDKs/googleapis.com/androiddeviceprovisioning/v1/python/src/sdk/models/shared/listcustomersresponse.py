from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import company


@dataclass_json
@dataclass
class ListCustomersResponse:
    customers: Optional[List[company.Company]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
