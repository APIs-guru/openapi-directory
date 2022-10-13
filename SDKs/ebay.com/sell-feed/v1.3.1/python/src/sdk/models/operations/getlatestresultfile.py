from dataclasses import dataclass, field
from typing import List


@dataclass
class GetLatestResultFilePathParams:
    schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLatestResultFileSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLatestResultFileRequest:
    path_params: GetLatestResultFilePathParams = field(default=None)
    security: GetLatestResultFileSecurity = field(default=None)
    

@dataclass
class GetLatestResultFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
