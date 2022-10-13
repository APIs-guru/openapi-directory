from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CloudPubsubTopicPayloadFormatEnum(str, Enum):
    PAYLOAD_FORMAT_UNSPECIFIED = "PAYLOAD_FORMAT_UNSPECIFIED"
    JSON = "JSON"


@dataclass_json
@dataclass
class CloudPubsubTopic:
    payload_format: Optional[CloudPubsubTopicPayloadFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadFormat' }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicName' }})
    
