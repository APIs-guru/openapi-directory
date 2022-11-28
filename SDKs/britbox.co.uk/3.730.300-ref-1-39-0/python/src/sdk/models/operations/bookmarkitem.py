from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BookmarkItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BookmarkItemQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class BookmarkItemSecurity:
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BookmarkItemRequest:
    path_params: BookmarkItemPathParams = field()
    query_params: BookmarkItemQueryParams = field()
    security: BookmarkItemSecurity = field()
    

@dataclass
class BookmarkItemResponse:
    content_type: str = field()
    status_code: int = field()
    bookmark: Optional[shared.Bookmark] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
