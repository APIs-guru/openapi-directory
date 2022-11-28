from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommandInvocation:
    r"""CommandInvocation
    An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user runs SendCommand against three instances, then a command invocation is created for each requested instance ID. A command invocation returns status and detail information about a command you ran. 
    """
    
    cloud_watch_output_config: Optional[CloudWatchOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchOutputConfig') }})
    command_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommandId') }})
    command_plugins: Optional[List[CommandPlugin]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommandPlugins') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comment') }})
    document_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentName') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceName') }})
    notification_config: Optional[NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationConfig') }})
    requested_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceRole') }})
    standard_error_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardErrorUrl') }})
    standard_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardOutputUrl') }})
    status: Optional[CommandInvocationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusDetails') }})
    trace_output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TraceOutput') }})
    
