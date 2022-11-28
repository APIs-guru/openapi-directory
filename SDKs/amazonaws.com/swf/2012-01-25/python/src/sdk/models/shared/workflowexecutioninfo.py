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
class WorkflowExecutionInfo:
    r"""WorkflowExecutionInfo
    Contains information about a workflow execution.
    """
    
    execution: WorkflowExecution = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execution') }})
    execution_status: ExecutionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionStatus') }})
    start_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workflow_type: WorkflowType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    cancel_requested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelRequested') }})
    close_status: Optional[CloseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeStatus') }})
    close_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent: Optional[WorkflowExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    tag_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagList') }})
    
