from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errorproto
from . import errorproto


@dataclass_json
@dataclass
class JobStatus:
    error_result: Optional[errorproto.ErrorProto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorResult' }})
    errors: Optional[List[errorproto.ErrorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
