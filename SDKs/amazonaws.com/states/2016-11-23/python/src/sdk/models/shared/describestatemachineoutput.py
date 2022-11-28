from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeStateMachineOutput:
    creation_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    state_machine_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    type: StateMachineTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    logging_configuration: Optional[LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfiguration') }})
    status: Optional[StateMachineStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tracing_configuration: Optional[TracingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracingConfiguration') }})
    
