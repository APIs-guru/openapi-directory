from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SavingsPlanOfferingRate:
    r"""SavingsPlanOfferingRate
    Information about a Savings Plan offering rate.
    """
    
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    product_type: Optional[SavingsPlanProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productType') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    savings_plan_offering: Optional[ParentSavingsPlanOffering] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanOffering') }})
    service_code: Optional[SavingsPlanRateServiceCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCode') }})
    unit: Optional[SavingsPlanRateUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    usage_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageType') }})
    
