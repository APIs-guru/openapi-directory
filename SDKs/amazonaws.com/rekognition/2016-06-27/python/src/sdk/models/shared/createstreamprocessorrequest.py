from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateStreamProcessorRequest:
    input: StreamProcessorInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output: StreamProcessorOutput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    settings: StreamProcessorSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
