from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvocationResponse:
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Payload' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    
