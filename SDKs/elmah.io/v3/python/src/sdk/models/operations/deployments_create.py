from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeploymentsCreateRequests:
    create_deployment: Optional[shared.CreateDeployment] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_deployment1: Optional[shared.CreateDeployment] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_deployment2: Optional[shared.CreateDeployment] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_deployment3: Optional[shared.CreateDeployment] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class DeploymentsCreateRequest:
    request: Optional[DeploymentsCreateRequests] = field(default=None)
    

@dataclass
class DeploymentsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    create_deployment_result: Optional[shared.CreateDeploymentResult] = field(default=None)
    
