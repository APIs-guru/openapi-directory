from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentDisputeActivityHistory:
    r"""PaymentDisputeActivityHistory
    This type is used by the base response of the getActivities method, and includes a log of all activities of a payment dispute, from creation to resolution.
    """
    
    activity: Optional[List[PaymentDisputeActivity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    
