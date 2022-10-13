from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotificationChannel:
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    sns_topic_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SNSTopicArn' }})
    
