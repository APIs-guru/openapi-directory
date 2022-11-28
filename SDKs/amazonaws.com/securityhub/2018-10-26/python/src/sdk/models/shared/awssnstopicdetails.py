from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsSnsTopicDetails:
    r"""AwsSnsTopicDetails
    A wrapper type for the topic's ARN.
    """
    
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsMasterKeyId') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    subscription: Optional[List[AwsSnsTopicSubscription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subscription') }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicName') }})
    
