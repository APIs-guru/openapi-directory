from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class GetConnectionsResponse:
    data: List[shared.Connection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
