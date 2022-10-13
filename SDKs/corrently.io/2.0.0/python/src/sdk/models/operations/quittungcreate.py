from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QuittungCreateRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    

@dataclass
class QuittungCreateRequest:
    request: QuittungCreateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QuittungCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    quittung_create_200_application_json_string: Optional[str] = field(default=None)
    
