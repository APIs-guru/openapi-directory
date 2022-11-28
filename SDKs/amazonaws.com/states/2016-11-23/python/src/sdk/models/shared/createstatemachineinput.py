from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateStateMachineInput:
    definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    logging_configuration: Optional[LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfiguration') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tracing_configuration: Optional[TracingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracingConfiguration') }})
    type: Optional[StateMachineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
