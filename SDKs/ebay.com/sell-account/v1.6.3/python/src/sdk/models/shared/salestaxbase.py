from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SalesTaxBase:
    r"""SalesTaxBase
    A container that describes the how the sales tax rate is calculated.
    """
    
    sales_tax_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxPercentage') }})
    shipping_and_handling_taxed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingAndHandlingTaxed') }})
    
