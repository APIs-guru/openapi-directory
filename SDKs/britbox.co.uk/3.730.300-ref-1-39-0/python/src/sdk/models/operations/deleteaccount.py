from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DeleteAccountQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAccountSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAccountRequest:
    query_params: DeleteAccountQueryParams = field()
    request: shared.ItvDeleteAccountRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: DeleteAccountSecurity = field()
    

@dataclass
class DeleteAccountResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    
