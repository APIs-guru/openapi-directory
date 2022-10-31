from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveOAuthApprovalPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOAuthApprovalHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveOAuthApprovalRequest:
    path_params: RemoveOAuthApprovalPathParams = field(default=None)
    headers: RemoveOAuthApprovalHeaders = field(default=None)
    

@dataclass
class RemoveOAuthApprovalResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
