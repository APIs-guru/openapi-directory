from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import closestatusfilter
from . import executiontimefilter
from . import workflowexecutionfilter
from . import executiontimefilter
from . import tagfilter
from . import workflowtypefilter


@dataclass_json
@dataclass
class CountClosedWorkflowExecutionsInput:
    close_status_filter: Optional[closestatusfilter.CloseStatusFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closeStatusFilter' }})
    close_time_filter: Optional[executiontimefilter.ExecutionTimeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closeTimeFilter' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    execution_filter: Optional[workflowexecutionfilter.WorkflowExecutionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionFilter' }})
    start_time_filter: Optional[executiontimefilter.ExecutionTimeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeFilter' }})
    tag_filter: Optional[tagfilter.TagFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagFilter' }})
    type_filter: Optional[workflowtypefilter.WorkflowTypeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeFilter' }})
    
