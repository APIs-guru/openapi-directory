from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EventSubscriptionsMessage:
    event_subscriptions_list: Optional[List[EventSubscription]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
