from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import loggingconfiguration
from . import tag
from . import tracingconfiguration
from . import statemachinetype_enum


@dataclass_json
@dataclass
class CreateStateMachineInput:
    definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    logging_configuration: Optional[loggingconfiguration.LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfiguration' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tracing_configuration: Optional[tracingconfiguration.TracingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracingConfiguration' }})
    type: Optional[statemachinetype_enum.StateMachineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
