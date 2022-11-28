from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetLatestResultFilePathParams:
    schedule_id: str = field(metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLatestResultFileSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLatestResultFileRequest:
    path_params: GetLatestResultFilePathParams = field()
    security: GetLatestResultFileSecurity = field()
    

@dataclass
class GetLatestResultFileResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
