from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DeleteProfileWithIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProfileWithIDQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProfileWithIDSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteProfileWithIDRequest:
    path_params: DeleteProfileWithIDPathParams = field()
    query_params: DeleteProfileWithIDQueryParams = field()
    security: DeleteProfileWithIDSecurity = field()
    

@dataclass
class DeleteProfileWithIDResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    
