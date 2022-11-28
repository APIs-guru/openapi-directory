from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductData:
    r"""ProductData
    Details of the products in an e-commerce transaction.
    """
    
    item_revenue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemRevenue') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productName') }})
    product_quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productQuantity') }})
    product_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSku') }})
    
