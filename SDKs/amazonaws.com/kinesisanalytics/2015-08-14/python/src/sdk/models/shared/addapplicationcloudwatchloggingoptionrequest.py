from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddApplicationCloudWatchLoggingOptionRequest:
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    cloud_watch_logging_option: CloudWatchLoggingOption = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOption') }})
    current_application_version_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    
