from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import closestatus_enum
from . import workflowexecution
from . import executionstatus_enum
from . import workflowexecution
from . import workflowtype


@dataclass_json
@dataclass
class WorkflowExecutionInfo:
    cancel_requested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelRequested' }})
    close_status: Optional[closestatus_enum.CloseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closeStatus' }})
    close_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closeTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution: workflowexecution.WorkflowExecution = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execution' }})
    execution_status: executionstatus_enum.ExecutionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStatus' }})
    parent: Optional[workflowexecution.WorkflowExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    start_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tag_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagList' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
