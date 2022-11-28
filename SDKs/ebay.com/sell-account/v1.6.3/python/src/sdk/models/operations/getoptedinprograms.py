from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOptedInProgramsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetOptedInProgramsRequest:
    security: GetOptedInProgramsSecurity = field()
    

@dataclass
class GetOptedInProgramsResponse:
    content_type: str = field()
    status_code: int = field()
    programs: Optional[shared.Programs] = field(default=None)
    
