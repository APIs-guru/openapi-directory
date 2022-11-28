from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SavingsPlan:
    r"""SavingsPlan
    Information about a Savings Plan.
    """
    
    commitment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitment') }})
    currency: Optional[CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ec2_instance_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2InstanceFamily') }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    offering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringId') }})
    payment_option: Optional[SavingsPlanPaymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentOption') }})
    product_types: Optional[List[SavingsPlanProductTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypes') }})
    recurring_payment_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringPaymentAmount') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    savings_plan_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanArn') }})
    savings_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanId') }})
    savings_plan_type: Optional[SavingsPlanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanType') }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    state: Optional[SavingsPlanStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    term_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termDurationInSeconds') }})
    upfront_payment_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upfrontPaymentAmount') }})
    
