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
class DescribeFlowDefinitionResponse:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flow_definition_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionArn') }})
    flow_definition_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionName') }})
    flow_definition_status: FlowDefinitionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionStatus') }})
    human_loop_config: HumanLoopConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopConfig') }})
    output_config: FlowDefinitionOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    human_loop_activation_config: Optional[HumanLoopActivationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationConfig') }})
    human_loop_request_source: Optional[HumanLoopRequestSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopRequestSource') }})
    
