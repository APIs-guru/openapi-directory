from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LineItemRequest:
    catalog_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogItemId' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quantity' }})
    
