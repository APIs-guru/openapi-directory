from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import humanloopoutput
from . import humanloopstatus_enum


@dataclass_json
@dataclass
class DescribeHumanLoopResponse:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureCode' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    flow_definition_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionArn' }})
    human_loop_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopArn' }})
    human_loop_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopName' }})
    human_loop_output: Optional[humanloopoutput.HumanLoopOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopOutput' }})
    human_loop_status: humanloopstatus_enum.HumanLoopStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopStatus' }})
    
