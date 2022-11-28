from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTransferPathParams:
    transfer_id: str = field(metadata={'path_param': { 'field_name': 'transfer_Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransferSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTransferRequest:
    path_params: GetTransferPathParams = field()
    security: GetTransferSecurity = field()
    

@dataclass
class GetTransferResponse:
    content_type: str = field()
    status_code: int = field()
    transfer: Optional[shared.Transfer] = field(default=None)
    
