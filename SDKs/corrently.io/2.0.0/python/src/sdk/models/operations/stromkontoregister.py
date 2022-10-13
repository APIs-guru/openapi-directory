from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StromkontoRegisterRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    zipcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipcode' }})
    

@dataclass
class StromkontoRegisterRequest:
    request: StromkontoRegisterRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StromkontoRegisterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
