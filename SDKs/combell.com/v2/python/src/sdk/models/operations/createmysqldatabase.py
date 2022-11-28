from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateMySQLDatabaseRequest:
    request: Optional[shared.CreateMySQLDatabase] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMySQLDatabaseResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    
