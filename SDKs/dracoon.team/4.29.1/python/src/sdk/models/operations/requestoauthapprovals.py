from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class RequestOAuthApprovalsQueryParams:
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestOAuthApprovalsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestOAuthApprovalsRequest:
    headers: RequestOAuthApprovalsHeaders = field()
    query_params: RequestOAuthApprovalsQueryParams = field()
    

@dataclass
class RequestOAuthApprovalsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    o_auth_approvals: Optional[List[shared.OAuthApproval]] = field(default=None)
    
