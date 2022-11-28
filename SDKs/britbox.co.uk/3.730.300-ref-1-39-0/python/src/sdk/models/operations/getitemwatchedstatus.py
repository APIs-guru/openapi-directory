from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetItemWatchedStatusPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemWatchedStatusQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemWatchedStatusSecurity:
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItemWatchedStatusRequest:
    path_params: GetItemWatchedStatusPathParams = field()
    query_params: GetItemWatchedStatusQueryParams = field()
    security: GetItemWatchedStatusSecurity = field()
    

@dataclass
class GetItemWatchedStatusResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    watched: Optional[shared.Watched] = field(default=None)
    
