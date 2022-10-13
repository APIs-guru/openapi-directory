from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loggingconfiguration
from . import statemachinestatus_enum
from . import tracingconfiguration
from . import statemachinetype_enum


@dataclass_json
@dataclass
class DescribeStateMachineOutput:
    creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    logging_configuration: Optional[loggingconfiguration.LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfiguration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    state_machine_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMachineArn' }})
    status: Optional[statemachinestatus_enum.StateMachineStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tracing_configuration: Optional[tracingconfiguration.TracingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracingConfiguration' }})
    type: statemachinetype_enum.StateMachineTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
