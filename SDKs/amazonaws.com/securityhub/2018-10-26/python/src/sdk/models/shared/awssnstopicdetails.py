from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awssnstopicsubscription


@dataclass_json
@dataclass
class AwsSnsTopicDetails:
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsMasterKeyId' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    subscription: Optional[List[awssnstopicsubscription.AwsSnsTopicSubscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subscription' }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopicName' }})
    
