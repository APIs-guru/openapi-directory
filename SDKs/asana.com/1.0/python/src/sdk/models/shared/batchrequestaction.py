from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class BatchRequestActionMethodEnum(str, Enum):
    GET = "get"
    POST = "post"
    PUT = "put"
    DELETE = "delete"
    PATCH = "patch"
    HEAD = "head"


@dataclass_json
@dataclass
class BatchRequestActionOptions:
    fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    

@dataclass_json
@dataclass
class BatchRequestAction:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    method: BatchRequestActionMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    options: Optional[BatchRequestActionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    relative_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relative_path' }})
    
