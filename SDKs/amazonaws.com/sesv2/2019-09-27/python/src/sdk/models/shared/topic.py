from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import subscriptionstatus_enum


@dataclass_json
@dataclass
class Topic:
    default_subscription_status: subscriptionstatus_enum.SubscriptionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultSubscriptionStatus' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    topic_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicName' }})
    
