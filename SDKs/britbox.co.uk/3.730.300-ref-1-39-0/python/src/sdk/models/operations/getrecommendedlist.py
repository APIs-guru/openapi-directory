from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRecommendedListQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    item_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'item_types', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecommendedListSecurity:
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRecommendedListRequest:
    query_params: GetRecommendedListQueryParams = field()
    security: GetRecommendedListSecurity = field()
    

@dataclass
class GetRecommendedListResponse:
    content_type: str = field()
    status_code: int = field()
    item_list: Optional[shared.ItemList] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
