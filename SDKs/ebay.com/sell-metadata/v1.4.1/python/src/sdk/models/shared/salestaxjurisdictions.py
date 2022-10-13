from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import salestaxjurisdiction


@dataclass_json
@dataclass
class SalesTaxJurisdictions:
    sales_tax_jurisdictions: Optional[List[salestaxjurisdiction.SalesTaxJurisdiction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesTaxJurisdictions' }})
    
