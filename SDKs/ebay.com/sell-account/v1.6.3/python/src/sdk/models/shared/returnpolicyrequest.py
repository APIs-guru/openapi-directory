from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categorytype
from . import internationalreturnoverridetype
from . import timeduration


@dataclass_json
@dataclass
class ReturnPolicyRequest:
    category_types: Optional[List[categorytype.CategoryType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTypes' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    extended_holiday_returns_offered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extendedHolidayReturnsOffered' }})
    international_override: Optional[internationalreturnoverridetype.InternationalReturnOverrideType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internationalOverride' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    refund_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundMethod' }})
    restocking_fee_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restockingFeePercentage' }})
    return_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnInstructions' }})
    return_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnMethod' }})
    return_period: Optional[timeduration.TimeDuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPeriod' }})
    return_shipping_cost_payer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnShippingCostPayer' }})
    returns_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnsAccepted' }})
    
