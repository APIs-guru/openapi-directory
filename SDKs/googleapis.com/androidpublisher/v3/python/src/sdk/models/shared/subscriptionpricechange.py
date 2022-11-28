from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionPriceChange:
    r"""SubscriptionPriceChange
    Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
    """
    
    new_price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPrice') }})
    state: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
