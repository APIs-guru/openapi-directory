from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import salestax


@dataclass_json
@dataclass
class SalesTaxes:
    sales_taxes: Optional[List[salestax.SalesTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesTaxes' }})
    
