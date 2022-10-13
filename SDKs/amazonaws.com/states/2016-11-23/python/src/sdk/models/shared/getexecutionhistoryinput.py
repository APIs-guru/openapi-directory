from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetExecutionHistoryInput:
    execution_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionArn' }})
    include_execution_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeExecutionData' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    reverse_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reverseOrder' }})
    
