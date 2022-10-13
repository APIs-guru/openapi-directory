from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestIdentityProviderResponse:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Response' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusCode' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
