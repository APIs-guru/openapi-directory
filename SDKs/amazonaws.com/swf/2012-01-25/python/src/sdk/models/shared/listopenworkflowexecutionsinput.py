from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workflowexecutionfilter
from . import executiontimefilter
from . import tagfilter
from . import workflowtypefilter


@dataclass_json
@dataclass
class ListOpenWorkflowExecutionsInput:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    execution_filter: Optional[workflowexecutionfilter.WorkflowExecutionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionFilter' }})
    maximum_page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPageSize' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    reverse_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverseOrder' }})
    start_time_filter: executiontimefilter.ExecutionTimeFilter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeFilter' }})
    tag_filter: Optional[tagfilter.TagFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagFilter' }})
    type_filter: Optional[workflowtypefilter.WorkflowTypeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeFilter' }})
    
