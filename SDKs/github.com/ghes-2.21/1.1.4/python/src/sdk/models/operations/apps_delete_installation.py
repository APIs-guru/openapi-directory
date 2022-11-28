from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsDeleteInstallationPathParams:
    installation_id: int = field(metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsDeleteInstallationHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsDeleteInstallationRequest:
    headers: AppsDeleteInstallationHeaders = field()
    path_params: AppsDeleteInstallationPathParams = field()
    

@dataclass
class AppsDeleteInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
