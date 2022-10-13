from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetObjectResponse:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    
