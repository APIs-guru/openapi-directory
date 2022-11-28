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
class StartSyncExecutionOutput:
    execution_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionArn') }})
    start_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: SyncExecutionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    stop_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    billing_details: Optional[BillingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingDetails') }})
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    input_details: Optional[CloudWatchEventsExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDetails') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    output_details: Optional[CloudWatchEventsExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputDetails') }})
    state_machine_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineArn') }})
    trace_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traceHeader') }})
    
