from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import storepage


@dataclass_json
@dataclass
class StoreLayoutPagesListResponse:
    page: Optional[List[storepage.StorePage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
