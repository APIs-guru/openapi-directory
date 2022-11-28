from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SnsConfiguration:
    r"""SnsConfiguration
    Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    sns_topic_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsTopicArn') }})
    
