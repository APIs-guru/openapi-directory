from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudWatchOutputConfig:
    cloud_watch_log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLogGroupName' }})
    cloud_watch_output_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchOutputEnabled' }})
    
