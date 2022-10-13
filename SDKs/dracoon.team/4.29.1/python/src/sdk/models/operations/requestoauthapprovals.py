from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class RequestOAuthApprovalsQueryParams:
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestOAuthApprovalsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RequestOAuthApprovalsRequest:
    query_params: RequestOAuthApprovalsQueryParams = field(default=None)
    headers: RequestOAuthApprovalsHeaders = field(default=None)
    

@dataclass
class RequestOAuthApprovalsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    o_auth_approvals: Optional[List[shared.OAuthApproval]] = field(default=None)
    status_code: int = field(default=None)
    
