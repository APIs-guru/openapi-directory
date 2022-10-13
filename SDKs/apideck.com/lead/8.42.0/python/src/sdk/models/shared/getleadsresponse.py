from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class GetLeadsResponse:
    data: List[shared.Lead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[shared.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    operation: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    resource: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
