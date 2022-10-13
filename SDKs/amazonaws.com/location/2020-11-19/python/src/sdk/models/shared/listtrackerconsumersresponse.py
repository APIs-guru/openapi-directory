from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListTrackerConsumersResponse:
    consumer_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerArns' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
