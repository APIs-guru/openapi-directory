from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AudioLogDestination:
    r"""AudioLogDestination
    The location of audio log files collected when conversation logging is enabled for a bot.
    """
    
    s3_bucket: S3BucketLogDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    
