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
class DescribeHumanLoopResponse:
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flow_definition_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionArn') }})
    human_loop_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopArn') }})
    human_loop_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopName') }})
    human_loop_status: HumanLoopStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopStatus') }})
    failure_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureCode') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    human_loop_output: Optional[HumanLoopOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopOutput') }})
    
