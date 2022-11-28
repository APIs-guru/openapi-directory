from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowExecutionDetail:
    r"""WorkflowExecutionDetail
    Contains details about a workflow execution.
    """
    
    execution_configuration: WorkflowExecutionConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfiguration') }})
    execution_info: WorkflowExecutionInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionInfo') }})
    open_counts: WorkflowExecutionOpenCounts = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openCounts') }})
    latest_activity_task_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestActivityTaskTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_execution_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestExecutionContext') }})
    
