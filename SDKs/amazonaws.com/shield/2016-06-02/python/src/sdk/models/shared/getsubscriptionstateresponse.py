from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import subscriptionstate_enum


@dataclass_json
@dataclass
class GetSubscriptionStateResponse:
    subscription_state: subscriptionstate_enum.SubscriptionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionState' }})
    
