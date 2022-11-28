from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SuppressViolationRequest:
    r"""SuppressViolationRequest
    This is the base request type of the suppressViolation method, and is used to identify the listing violation that the seller wishes to suppress.
    """
    
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceType') }})
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingId') }})
    
