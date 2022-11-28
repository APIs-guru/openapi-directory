from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetProfileWithIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProfileWithIDQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProfileWithIDSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileWithIDRequest:
    path_params: GetProfileWithIDPathParams = field()
    query_params: GetProfileWithIDQueryParams = field()
    security: GetProfileWithIDSecurity = field()
    

@dataclass
class GetProfileWithIDResponse:
    content_type: str = field()
    status_code: int = field()
    profile_summary: Optional[shared.ProfileSummary] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
