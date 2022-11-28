from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReceiptLineItem:
    r"""ReceiptLineItem
    Receipt line item, comprised of a product or item and a price (if available)
    """
    
    item_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemDescription') }})
    item_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemPrice') }})
    
