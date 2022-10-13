from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import flowdefinitionstatus_enum
from . import humanloopactivationconfig
from . import humanloopconfig
from . import humanlooprequestsource
from . import flowdefinitionoutputconfig


@dataclass_json
@dataclass
class DescribeFlowDefinitionResponse:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    flow_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionArn' }})
    flow_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionName' }})
    flow_definition_status: flowdefinitionstatus_enum.FlowDefinitionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionStatus' }})
    human_loop_activation_config: Optional[humanloopactivationconfig.HumanLoopActivationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopActivationConfig' }})
    human_loop_config: humanloopconfig.HumanLoopConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopConfig' }})
    human_loop_request_source: Optional[humanlooprequestsource.HumanLoopRequestSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopRequestSource' }})
    output_config: flowdefinitionoutputconfig.FlowDefinitionOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
