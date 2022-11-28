from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class SubscriptionPriceChange:
    r"""SubscriptionPriceChange
    Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
    """
    
    new_price: Optional[Price] = field(default=None)
    state: Optional[int] = field(default=None)
    
