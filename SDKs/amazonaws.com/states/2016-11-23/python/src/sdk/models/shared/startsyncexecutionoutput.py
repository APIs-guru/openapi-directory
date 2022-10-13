from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import billingdetails
from . import cloudwatcheventsexecutiondatadetails
from . import cloudwatcheventsexecutiondatadetails
from . import syncexecutionstatus_enum


@dataclass_json
@dataclass
class StartSyncExecutionOutput:
    billing_details: Optional[billingdetails.BillingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingDetails' }})
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    execution_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionArn' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    input_details: Optional[cloudwatcheventsexecutiondatadetails.CloudWatchEventsExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    output_details: Optional[cloudwatcheventsexecutiondatadetails.CloudWatchEventsExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputDetails' }})
    start_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_machine_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMachineArn' }})
    status: syncexecutionstatus_enum.SyncExecutionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stop_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trace_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traceHeader' }})
    
