from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CloudPubsubTopicPayloadFormatEnum(str, Enum):
    PAYLOAD_FORMAT_UNSPECIFIED = "PAYLOAD_FORMAT_UNSPECIFIED"
    JSON = "JSON"


@dataclass_json
@dataclass
class CloudPubsubTopic:
    r"""CloudPubsubTopic
    A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
    """
    
    payload_format: Optional[CloudPubsubTopicPayloadFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadFormat') }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicName') }})
    
