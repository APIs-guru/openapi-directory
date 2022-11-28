from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateStateMachineInput:
    state_machine_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    logging_configuration: Optional[LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfiguration') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    tracing_configuration: Optional[TracingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracingConfiguration') }})
    
