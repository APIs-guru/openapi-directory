from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetItemBookmarkPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemBookmarkQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemBookmarkSecurity:
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItemBookmarkRequest:
    path_params: GetItemBookmarkPathParams = field()
    query_params: GetItemBookmarkQueryParams = field()
    security: GetItemBookmarkSecurity = field()
    

@dataclass
class GetItemBookmarkResponse:
    content_type: str = field()
    status_code: int = field()
    bookmark: Optional[shared.Bookmark] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
