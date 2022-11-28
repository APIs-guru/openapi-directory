from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateApplicationRequest:
    r"""CreateApplicationRequest
    TBD
    """
    
    application_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    application_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationCode') }})
    application_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationDescription') }})
    cloud_watch_logging_options: Optional[List[CloudWatchLoggingOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    inputs: Optional[List[Input]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inputs') }})
    outputs: Optional[List[Output]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
