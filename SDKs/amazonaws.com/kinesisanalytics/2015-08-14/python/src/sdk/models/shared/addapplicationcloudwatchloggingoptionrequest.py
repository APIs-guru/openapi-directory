from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import cloudwatchloggingoption


@dataclass_json
@dataclass
class AddApplicationCloudWatchLoggingOptionRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    cloud_watch_logging_option: cloudwatchloggingoption.CloudWatchLoggingOption = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOption' }})
    current_application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    
