from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateShipmentFromQuoteRequest:
    r"""CreateShipmentFromQuoteRequest
    This complex type contains the request payload for the createFromShippingQuote method.
    """
    
    additional_options: Optional[List[AdditionalOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalOptions') }})
    label_custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelCustomMessage') }})
    label_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelSize') }})
    rate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateId') }})
    return_to: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnTo') }})
    shipping_quote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingQuoteId') }})
    
