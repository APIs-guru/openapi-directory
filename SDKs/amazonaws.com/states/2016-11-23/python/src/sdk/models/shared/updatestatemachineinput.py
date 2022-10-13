from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loggingconfiguration
from . import tracingconfiguration


@dataclass_json
@dataclass
class UpdateStateMachineInput:
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    logging_configuration: Optional[loggingconfiguration.LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfiguration' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    state_machine_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMachineArn' }})
    tracing_configuration: Optional[tracingconfiguration.TracingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracingConfiguration' }})
    
