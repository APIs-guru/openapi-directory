from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotificationChannel:
    r"""NotificationChannel
    The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>. Note that the Amazon SNS topic must have a topic name that begins with <i>AmazonRekognition</i> if you are using the AmazonRekognitionServiceRole permissions policy to access the topic. For more information, see <a href=\"https://docs.aws.amazon.com/rekognition/latest/dg/api-video-roles.html#api-video-roles-all-topics\">Giving access to multiple Amazon SNS topics</a>.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    sns_topic_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SNSTopicArn') }})
    
