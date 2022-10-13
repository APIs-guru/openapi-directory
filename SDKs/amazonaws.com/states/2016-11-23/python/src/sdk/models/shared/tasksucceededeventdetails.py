from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import historyeventexecutiondatadetails


@dataclass_json
@dataclass
class TaskSucceededEventDetails:
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    output_details: Optional[historyeventexecutiondatadetails.HistoryEventExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputDetails' }})
    resource: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
