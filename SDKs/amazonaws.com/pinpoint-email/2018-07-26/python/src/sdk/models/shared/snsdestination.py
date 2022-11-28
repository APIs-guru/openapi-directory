from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SnsDestination:
    r"""SnsDestination
    An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
    """
    
    topic_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicArn') }})
    
