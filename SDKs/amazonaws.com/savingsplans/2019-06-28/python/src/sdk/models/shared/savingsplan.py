from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import currencycode_enum
from . import savingsplanpaymentoption_enum
from . import savingsplanproducttype_enum
from . import savingsplantype_enum
from . import savingsplanstate_enum


@dataclass_json
@dataclass
class SavingsPlan:
    commitment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitment' }})
    currency: Optional[currencycode_enum.CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ec2_instance_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2InstanceFamily' }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    offering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringId' }})
    payment_option: Optional[savingsplanpaymentoption_enum.SavingsPlanPaymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentOption' }})
    product_types: Optional[List[savingsplanproducttype_enum.SavingsPlanProductTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypes' }})
    recurring_payment_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurringPaymentAmount' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    savings_plan_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingsPlanArn' }})
    savings_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingsPlanId' }})
    savings_plan_type: Optional[savingsplantype_enum.SavingsPlanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingsPlanType' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    state: Optional[savingsplanstate_enum.SavingsPlanStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    term_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termDurationInSeconds' }})
    upfront_payment_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upfrontPaymentAmount' }})
    
