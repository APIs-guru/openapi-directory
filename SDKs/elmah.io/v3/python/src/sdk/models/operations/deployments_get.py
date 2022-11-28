from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeploymentsGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeploymentsGetRequest:
    path_params: DeploymentsGetPathParams = field()
    

@dataclass
class DeploymentsGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    deployment: Optional[shared.Deployment] = field(default=None)
    
