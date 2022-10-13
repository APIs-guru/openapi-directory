from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetProfileWithIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProfileWithIDQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProfileWithIDSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileWithIDRequest:
    path_params: GetProfileWithIDPathParams = field(default=None)
    query_params: GetProfileWithIDQueryParams = field(default=None)
    security: GetProfileWithIDSecurity = field(default=None)
    

@dataclass
class GetProfileWithIDResponse:
    content_type: str = field(default=None)
    profile_summary: Optional[shared.ProfileSummary] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
