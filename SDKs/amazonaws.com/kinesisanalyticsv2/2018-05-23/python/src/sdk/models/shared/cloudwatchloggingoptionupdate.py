from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudWatchLoggingOptionUpdate:
    cloud_watch_logging_option_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptionId' }})
    log_stream_arn_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogStreamARNUpdate' }})
    
