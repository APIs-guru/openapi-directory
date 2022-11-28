from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetInputFilePathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInputFileSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInputFileRequest:
    path_params: GetInputFilePathParams = field()
    security: GetInputFileSecurity = field()
    

@dataclass
class GetInputFileResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
