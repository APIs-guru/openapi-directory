from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import currencycode_enum
from . import savingsplanpaymentoption_enum
from . import savingsplantype_enum


@dataclass_json
@dataclass
class ParentSavingsPlanOffering:
    currency: Optional[currencycode_enum.CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationSeconds' }})
    offering_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offeringId' }})
    payment_option: Optional[savingsplanpaymentoption_enum.SavingsPlanPaymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentOption' }})
    plan_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planDescription' }})
    plan_type: Optional[savingsplantype_enum.SavingsPlanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planType' }})
    
