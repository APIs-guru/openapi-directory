from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import connection


@dataclass_json
@dataclass
class CreateConnectionResponse:
    data: connection.Connection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
