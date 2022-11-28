from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SavingsPlanOffering:
    r"""SavingsPlanOffering
    Information about a Savings Plan offering.
    """
    
    currency: Optional[CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSeconds') }})
    offering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    payment_option: Optional[SavingsPlanPaymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentOption') }})
    plan_type: Optional[SavingsPlanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planType') }})
    product_types: Optional[List[SavingsPlanProductTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypes') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCode') }})
    usage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageType') }})
    
