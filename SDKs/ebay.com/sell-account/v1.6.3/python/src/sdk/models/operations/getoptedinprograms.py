from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOptedInProgramsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetOptedInProgramsRequest:
    security: GetOptedInProgramsSecurity = field(default=None)
    

@dataclass
class GetOptedInProgramsResponse:
    content_type: str = field(default=None)
    programs: Optional[shared.Programs] = field(default=None)
    status_code: int = field(default=None)
    
