from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SalesTaxJurisdictions:
    r"""SalesTaxJurisdictions
    This complex type contains a list of sales tax jurisdictions.
    """
    
    sales_tax_jurisdictions: Optional[List[SalesTaxJurisdiction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxJurisdictions') }})
    
