from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetReturnPolicyResponse:
    r"""SetReturnPolicyResponse
    Complex type that that gets populated with a response containing a return policy.
    """
    
    category_types: Optional[List[CategoryType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTypes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extended_holiday_returns_offered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedHolidayReturnsOffered') }})
    international_override: Optional[InternationalReturnOverrideType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internationalOverride') }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    refund_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundMethod') }})
    restocking_fee_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restockingFeePercentage') }})
    return_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnInstructions') }})
    return_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnMethod') }})
    return_period: Optional[TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPeriod') }})
    return_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPolicyId') }})
    return_shipping_cost_payer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShippingCostPayer') }})
    returns_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnsAccepted') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
