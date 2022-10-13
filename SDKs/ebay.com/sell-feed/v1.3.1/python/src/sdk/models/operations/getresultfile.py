from dataclasses import dataclass, field
from typing import List


@dataclass
class GetResultFilePathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResultFileSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetResultFileRequest:
    path_params: GetResultFilePathParams = field(default=None)
    security: GetResultFileSecurity = field(default=None)
    

@dataclass
class GetResultFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
