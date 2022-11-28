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
class GetCommandInvocationResult:
    cloud_watch_output_config: Optional[CloudWatchOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchOutputConfig') }})
    command_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommandId') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comment') }})
    document_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentName') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    execution_elapsed_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionElapsedTime') }})
    execution_end_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionEndDateTime') }})
    execution_start_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionStartDateTime') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    plugin_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PluginName') }})
    response_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseCode') }})
    standard_error_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardErrorContent') }})
    standard_error_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardErrorUrl') }})
    standard_output_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardOutputContent') }})
    standard_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardOutputUrl') }})
    status: Optional[CommandInvocationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusDetails') }})
    
