from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReturnPolicyRequest:
    r"""ReturnPolicyRequest
    This root container defines a seller's return policy for a specific marketplace and category type. Used when creating or updating a return policy, returnPolicyRequest encapsulates a seller's terms for how buyers can return items. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Use the Metadata API method to determine which categories in the marketplace(s) require you to provide a return policy. Also note that some marketplaces require you to provide a specific return policy for vehicle listings. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
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
    return_shipping_cost_payer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShippingCostPayer') }})
    returns_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnsAccepted') }})
    
