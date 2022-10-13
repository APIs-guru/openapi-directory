from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogsloggroup


@dataclass_json
@dataclass
class LogDestination:
    cloud_watch_logs_log_group: Optional[cloudwatchlogsloggroup.CloudWatchLogsLogGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogsLogGroup' }})
    
