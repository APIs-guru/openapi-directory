from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsDeleteInstallationPathParams:
    installation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsDeleteInstallationHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass
class AppsDeleteInstallationRequest:
    path_params: AppsDeleteInstallationPathParams = field(default=None)
    headers: AppsDeleteInstallationHeaders = field(default=None)
    

@dataclass
class AppsDeleteInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
