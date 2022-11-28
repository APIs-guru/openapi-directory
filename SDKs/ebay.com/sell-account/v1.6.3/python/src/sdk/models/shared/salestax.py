from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SalesTax:
    r"""SalesTax
    The applicable sales tax rate, as a percentage of the sale amount, for a given country and sales tax jurisdiction within that country.
    """
    
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    sales_tax_jurisdiction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxJurisdictionId') }})
    sales_tax_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesTaxPercentage') }})
    shipping_and_handling_taxed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingAndHandlingTaxed') }})
    
