from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteApplicationCloudWatchLoggingOptionRequest:
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    cloud_watch_logging_option_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptionId') }})
    conditional_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalToken') }})
    current_application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    
