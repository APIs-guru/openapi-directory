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
class HumanLoopSummary:
    r"""HumanLoopSummary
    Summary information about the human loop.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    flow_definition_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionArn') }})
    human_loop_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopName') }})
    human_loop_status: Optional[HumanLoopStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopStatus') }})
    
