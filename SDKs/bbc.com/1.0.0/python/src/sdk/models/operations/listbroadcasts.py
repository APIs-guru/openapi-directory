from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListBroadcastsMixinEnum(str, Enum):
    TITLES = "titles"

class ListBroadcastsSortEnum(str, Enum):
    START_DATE = "start_date"

class ListBroadcastsSortDirectionEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"


@dataclass
class ListBroadcastsQueryParams:
    authority: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'authority', 'style': 'form', 'explode': True }})
    descendants_of: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'descendants_of', 'style': 'form', 'explode': True }})
    end_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_from', 'style': 'form', 'explode': True }})
    end_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_to', 'style': 'form', 'explode': True }})
    format: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    genre: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'genre', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    item: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'item', 'style': 'form', 'explode': True }})
    mixin: Optional[List[ListBroadcastsMixinEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    people: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'people', 'style': 'form', 'explode': True }})
    pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'pid', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    schedule_day: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'schedule_day', 'style': 'form', 'explode': True }})
    schedule_day_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'schedule_day_from', 'style': 'form', 'explode': True }})
    schedule_day_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'schedule_day_to', 'style': 'form', 'explode': True }})
    service_master_brand: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'service_master_brand', 'style': 'form', 'explode': True }})
    sid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sid', 'style': 'form', 'explode': True }})
    sort: Optional[ListBroadcastsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_direction: Optional[ListBroadcastsSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    start_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_from', 'style': 'form', 'explode': True }})
    start_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_to', 'style': 'form', 'explode': True }})
    version: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBroadcastsRequest:
    query_params: ListBroadcastsQueryParams = field(default=None)
    

@dataclass
class ListBroadcastsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
