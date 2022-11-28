from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionalBasePlanConfig:
    r"""RegionalBasePlanConfig
    Configuration for a base plan specific to a region.
    """
    
    new_subscriber_availability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSubscriberAvailability') }})
    price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
