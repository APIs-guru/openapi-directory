from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import subscriptionstatus_enum


@dataclass_json
@dataclass
class TopicPreference:
    subscription_status: subscriptionstatus_enum.SubscriptionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscriptionStatus' }})
    topic_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicName' }})
    
