from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OtherRegionsBasePlanConfig:
    r"""OtherRegionsBasePlanConfig
    Pricing information for any new locations Play may launch in.
    """
    
    eur_price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eurPrice') }})
    new_subscriber_availability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSubscriberAvailability') }})
    usd_price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usdPrice') }})
    
