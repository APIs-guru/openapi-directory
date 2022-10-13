from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReceiptLineItem:
    item_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemDescription' }})
    item_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemPrice' }})
    
