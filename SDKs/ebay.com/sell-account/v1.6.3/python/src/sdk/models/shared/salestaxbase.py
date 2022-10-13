from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SalesTaxBase:
    sales_tax_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesTaxPercentage' }})
    shipping_and_handling_taxed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingAndHandlingTaxed' }})
    
