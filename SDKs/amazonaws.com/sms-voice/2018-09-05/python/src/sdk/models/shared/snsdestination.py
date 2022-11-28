from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SnsDestination:
    r"""SnsDestination
    An object that contains information about an event destination that sends data to Amazon SNS.
    """
    
    topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopicArn') }})
    
