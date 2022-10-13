from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudwatchloggingoption


@dataclass_json
@dataclass
class AddApplicationCloudWatchLoggingOptionRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    cloud_watch_logging_option: cloudwatchloggingoption.CloudWatchLoggingOption = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOption' }})
    conditional_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionalToken' }})
    current_application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    
