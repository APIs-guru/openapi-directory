from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import receipt


@dataclass_json
@dataclass
class ListPageReceiptsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    receipts: Optional[List[receipt.Receipt]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Receipts' }})
    
