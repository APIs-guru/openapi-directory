from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClaimDevicesRequest:
    r"""ClaimDevicesRequest
    Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal.
    """
    
    claims: Optional[List[PartnerClaim]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    
