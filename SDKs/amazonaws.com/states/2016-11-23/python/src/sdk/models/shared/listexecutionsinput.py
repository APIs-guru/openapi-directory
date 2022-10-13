from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import executionstatus_enum


@dataclass_json
@dataclass
class ListExecutionsInput:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    state_machine_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMachineArn' }})
    status_filter: Optional[executionstatus_enum.ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusFilter' }})
    
