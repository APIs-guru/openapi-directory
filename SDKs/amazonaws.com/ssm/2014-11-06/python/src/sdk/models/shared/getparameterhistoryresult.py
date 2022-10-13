from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parameterhistory


@dataclass_json
@dataclass
class GetParameterHistoryResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parameters: Optional[List[parameterhistory.ParameterHistory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    
