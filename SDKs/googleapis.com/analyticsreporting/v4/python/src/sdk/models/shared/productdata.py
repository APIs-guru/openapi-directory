from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductData:
    item_revenue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemRevenue' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productName' }})
    product_quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productQuantity' }})
    product_sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSku' }})
    
