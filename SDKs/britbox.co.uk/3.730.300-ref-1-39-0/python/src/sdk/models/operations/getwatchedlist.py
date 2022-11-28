from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetWatchedListOrderByEnum(str, Enum):
    DATE_ADDED = "date-added"
    DATE_MODIFIED = "date-modified"


@dataclass
class GetWatchedListQueryParams:
    completed: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'completed', 'style': 'form', 'explode': True }})
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    item_type: Optional[shared.ItemTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'item_type', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    order: Optional[shared.ListOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    order_by: Optional[GetWatchedListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWatchedListSecurity:
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWatchedListRequest:
    query_params: GetWatchedListQueryParams = field()
    security: GetWatchedListSecurity = field()
    

@dataclass
class GetWatchedListResponse:
    content_type: str = field()
    status_code: int = field()
    item_list: Optional[shared.ItemList] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
