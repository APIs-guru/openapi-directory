from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import delegate


@dataclass_json
@dataclass
class ListResourceDelegatesResponse:
    delegates: Optional[List[delegate.Delegate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Delegates' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
