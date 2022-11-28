from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Tool:
    r"""Tool
    Information about a tool. Tools are used in a simulation job.
    """
    
    command: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    exit_behavior: Optional[ExitBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitBehavior') }})
    stream_output_to_cloud_watch: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamOutputToCloudWatch') }})
    stream_ui: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamUI') }})
    
