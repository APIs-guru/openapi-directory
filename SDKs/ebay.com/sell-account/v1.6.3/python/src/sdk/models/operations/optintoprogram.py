from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OptInToProgramSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OptInToProgramRequest:
    request: shared.Program = field(metadata={'request': { 'media_type': 'application/json' }})
    security: OptInToProgramSecurity = field()
    

@dataclass
class OptInToProgramResponse:
    content_type: str = field()
    status_code: int = field()
    opt_in_to_program_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
