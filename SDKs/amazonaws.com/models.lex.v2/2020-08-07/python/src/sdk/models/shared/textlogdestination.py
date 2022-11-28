from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextLogDestination:
    r"""TextLogDestination
    Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
    """
    
    cloud_watch: CloudWatchLogGroupLogDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatch') }})
    
