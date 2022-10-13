from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateMySQLDatabaseRequest:
    request: Optional[shared.CreateMySQLDatabase] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMySQLDatabaseResponse:
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
