from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import flowexecutionmessage


@dataclass_json
@dataclass
class ListFlowExecutionMessagesResponse:
    messages: Optional[List[flowexecutionmessage.FlowExecutionMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
