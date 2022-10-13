from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import automationexecutionmetadata


@dataclass_json
@dataclass
class DescribeAutomationExecutionsResult:
    automation_execution_metadata_list: Optional[List[automationexecutionmetadata.AutomationExecutionMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationExecutionMetadataList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
