from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import longtermpricingtype_enum
from . import snowballtype_enum


@dataclass_json
@dataclass
class CreateLongTermPricingRequest:
    is_long_term_pricing_auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsLongTermPricingAutoRenew' }})
    long_term_pricing_type: longtermpricingtype_enum.LongTermPricingTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongTermPricingType' }})
    snowball_type: Optional[snowballtype_enum.SnowballTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnowballType' }})
    
