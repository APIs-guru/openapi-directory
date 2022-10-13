from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchloggingoptiondescription


@dataclass_json
@dataclass
class DeleteApplicationCloudWatchLoggingOptionResponse:
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    cloud_watch_logging_option_descriptions: Optional[List[cloudwatchloggingoptiondescription.CloudWatchLoggingOptionDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptionDescriptions' }})
    
