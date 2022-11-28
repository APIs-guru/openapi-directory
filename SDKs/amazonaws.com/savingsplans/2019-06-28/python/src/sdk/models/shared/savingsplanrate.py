from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SavingsPlanRate:
    r"""SavingsPlanRate
    Information about a Savings Plan rate.
    """
    
    currency: Optional[CurrencyCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    product_type: Optional[SavingsPlanProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productType') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    service_code: Optional[SavingsPlanRateServiceCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCode') }})
    unit: Optional[SavingsPlanRateUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    usage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageType') }})
    
