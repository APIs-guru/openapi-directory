from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransferPathParams:
    transfer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'transfer_Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransferSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTransferRequest:
    path_params: GetTransferPathParams = field(default=None)
    security: GetTransferSecurity = field(default=None)
    

@dataclass
class GetTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    transfer: Optional[shared.Transfer] = field(default=None)
    
