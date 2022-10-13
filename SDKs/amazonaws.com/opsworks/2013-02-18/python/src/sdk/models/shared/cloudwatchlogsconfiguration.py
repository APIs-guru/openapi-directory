from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogslogstream


@dataclass_json
@dataclass
class CloudWatchLogsConfiguration:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    log_streams: Optional[List[cloudwatchlogslogstream.CloudWatchLogsLogStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogStreams' }})
    
