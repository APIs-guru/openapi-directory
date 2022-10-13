from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteApplicationCloudWatchLoggingOptionRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    cloud_watch_logging_option_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptionId' }})
    current_application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentApplicationVersionId' }})
    
