from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AcceptPaymentDisputeRequest:
    r"""AcceptPaymentDisputeRequest
    This type is used by base request of the acceptPaymentDispute method.
    """
    
    return_address: Optional[ReturnAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnAddress') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
