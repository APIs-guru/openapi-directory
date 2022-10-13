from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workflowexecutioninfo


@dataclass_json
@dataclass
class WorkflowExecutionInfos:
    execution_infos: List[workflowexecutioninfo.WorkflowExecutionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionInfos' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
