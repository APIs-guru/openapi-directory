from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SetItemWatchedStatusPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetItemWatchedStatusQueryParams:
    position: int = field(metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class SetItemWatchedStatusSecurity:
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetItemWatchedStatusRequest:
    path_params: SetItemWatchedStatusPathParams = field()
    query_params: SetItemWatchedStatusQueryParams = field()
    security: SetItemWatchedStatusSecurity = field()
    

@dataclass
class SetItemWatchedStatusResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    watched: Optional[shared.Watched] = field(default=None)
    
