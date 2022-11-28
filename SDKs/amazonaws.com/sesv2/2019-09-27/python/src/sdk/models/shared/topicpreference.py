from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TopicPreference:
    r"""TopicPreference
    The contact's preference for being opted-in to or opted-out of a topic.
    """
    
    subscription_status: SubscriptionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubscriptionStatus') }})
    topic_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    
