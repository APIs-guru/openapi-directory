from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import workflowexecutionconfiguration
from . import workflowexecutioninfo
from . import workflowexecutionopencounts


@dataclass_json
@dataclass
class WorkflowExecutionDetail:
    execution_configuration: workflowexecutionconfiguration.WorkflowExecutionConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionConfiguration' }})
    execution_info: workflowexecutioninfo.WorkflowExecutionInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionInfo' }})
    latest_activity_task_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestActivityTaskTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_execution_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestExecutionContext' }})
    open_counts: workflowexecutionopencounts.WorkflowExecutionOpenCounts = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openCounts' }})
    
