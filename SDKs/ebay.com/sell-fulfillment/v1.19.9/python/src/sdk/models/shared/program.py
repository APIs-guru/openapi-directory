from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Program:
    r"""Program
    This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program.
    """
    
    authenticity_verification: Optional[PostSaleAuthenticationProgram] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticityVerification') }})
    fulfillment_program: Optional[EbayFulfillmentProgram] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentProgram') }})
    
