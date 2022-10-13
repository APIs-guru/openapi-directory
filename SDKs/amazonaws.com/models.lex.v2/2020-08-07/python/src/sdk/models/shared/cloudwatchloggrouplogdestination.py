from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudWatchLogGroupLogDestination:
    cloud_watch_log_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogGroupArn' }})
    log_prefix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logPrefix' }})
    
