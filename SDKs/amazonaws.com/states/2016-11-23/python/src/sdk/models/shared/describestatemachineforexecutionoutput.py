from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import loggingconfiguration
from . import tracingconfiguration


@dataclass_json
@dataclass
class DescribeStateMachineForExecutionOutput:
    definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    logging_configuration: Optional[loggingconfiguration.LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfiguration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    state_machine_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMachineArn' }})
    tracing_configuration: Optional[tracingconfiguration.TracingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracingConfiguration' }})
    update_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
