from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import createaccountstate_enum


@dataclass_json
@dataclass
class ListCreateAccountStatusRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    states: Optional[List[createaccountstate_enum.CreateAccountStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'States' }})
    
