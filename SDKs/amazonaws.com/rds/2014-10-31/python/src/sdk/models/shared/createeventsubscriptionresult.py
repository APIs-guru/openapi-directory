from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateEventSubscriptionResult:
    event_subscription: Optional[EventSubscription] = field(default=None)
    
