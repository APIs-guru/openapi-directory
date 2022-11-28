from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParentSavingsPlanOffering:
    r"""ParentSavingsPlanOffering
    Information about a Savings Plan offering.
    """
    
    currency: Optional[CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSeconds') }})
    offering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    payment_option: Optional[SavingsPlanPaymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentOption') }})
    plan_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planDescription') }})
    plan_type: Optional[SavingsPlanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planType') }})
    
