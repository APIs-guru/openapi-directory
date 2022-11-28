from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLongTermPricingRequest:
    long_term_pricing_type: LongTermPricingTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingType') }})
    is_long_term_pricing_auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLongTermPricingAutoRenew') }})
    snowball_type: Optional[SnowballTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    
