from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudWatchLogGroupLogDestination:
    r"""CloudWatchLogGroupLogDestination
    The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
    """
    
    cloud_watch_log_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogGroupArn') }})
    log_prefix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logPrefix') }})
    
