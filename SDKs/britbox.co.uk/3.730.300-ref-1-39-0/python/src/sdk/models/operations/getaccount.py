from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAccountQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountRequest:
    query_params: GetAccountQueryParams = field()
    security: GetAccountSecurity = field()
    

@dataclass
class GetAccountResponse:
    content_type: str = field()
    status_code: int = field()
    account: Optional[dict[str, Any]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
