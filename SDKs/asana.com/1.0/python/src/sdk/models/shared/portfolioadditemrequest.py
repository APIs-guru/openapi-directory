from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PortfolioAddItemRequest:
    insert_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert_after' }})
    insert_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert_before' }})
    item: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    
