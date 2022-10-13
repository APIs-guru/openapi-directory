from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OptOutOfProgramSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OptOutOfProgramRequest:
    request: shared.Program = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: OptOutOfProgramSecurity = field(default=None)
    

@dataclass
class OptOutOfProgramResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    opt_out_of_program_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
