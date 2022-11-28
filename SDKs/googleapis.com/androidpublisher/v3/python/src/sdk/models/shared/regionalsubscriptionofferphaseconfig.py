from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionalSubscriptionOfferPhaseConfig:
    r"""RegionalSubscriptionOfferPhaseConfig
    Configuration for a single phase of a subscription offer in a single region.
    """
    
    absolute_discount: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absoluteDiscount') }})
    price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    relative_discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeDiscount') }})
    
