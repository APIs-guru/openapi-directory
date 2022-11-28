from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Topic:
    r"""Topic
    An interest group, theme, or label within a list. Lists can have multiple topics.
    """
    
    default_subscription_status: SubscriptionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSubscriptionStatus') }})
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    topic_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
