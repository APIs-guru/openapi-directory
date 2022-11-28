from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EbayFulfillmentProgram:
    r"""EbayFulfillmentProgram
    This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.
    """
    
    fulfilled_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfilledBy') }})
    
