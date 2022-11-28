from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EbayTaxReference:
    r"""EbayTaxReference
    This type describes the VAT tax details. The eBay VAT tax type and the eBay VAT identifier number will be returned if a VAT tax is applicable for the order. Note: On January 31, 2022, the orders.fulfillmentStartInstructions.shippingStep.shipTo.contactAddress.addressLine2 will stop being used to return VAT information, so developers should make sure they integrate with the new fields before that time.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
