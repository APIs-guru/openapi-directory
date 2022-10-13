from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import historyeventexecutiondatadetails


@dataclass_json
@dataclass
class StateEnteredEventDetails:
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    input_details: Optional[historyeventexecutiondatadetails.HistoryEventExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDetails' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
