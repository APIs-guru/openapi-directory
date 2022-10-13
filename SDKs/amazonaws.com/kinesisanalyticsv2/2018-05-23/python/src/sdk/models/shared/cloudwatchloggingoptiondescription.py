from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudWatchLoggingOptionDescription:
    cloud_watch_logging_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptionId' }})
    log_stream_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogStreamARN' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    
