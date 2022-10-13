from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import applicationresponse


@dataclass_json
@dataclass
class ApplicationsResponse:
    item: Optional[List[applicationresponse.ApplicationResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
