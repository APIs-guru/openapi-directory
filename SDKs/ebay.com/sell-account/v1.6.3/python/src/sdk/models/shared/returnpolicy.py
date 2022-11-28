from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReturnPolicy:
    r"""ReturnPolicy
    Root container that defines the fields for a seller's return policy. The returnPolicy encapsulates a seller's terms for how they handle item returns, the name and description of the policy, and the marketplace and category group(s) to which the return policy is applied. While each seller must define at least one return policy for every marketplace into which they sell, sellers can define multiple return policies for a single marketplace by specifying different configurations for the unique policies.
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
    
