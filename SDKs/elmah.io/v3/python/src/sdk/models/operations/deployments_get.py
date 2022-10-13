from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeploymentsGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeploymentsGetRequest:
    path_params: DeploymentsGetPathParams = field(default=None)
    

@dataclass
class DeploymentsGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    deployment: Optional[shared.Deployment] = field(default=None)
    status_code: int = field(default=None)
    
