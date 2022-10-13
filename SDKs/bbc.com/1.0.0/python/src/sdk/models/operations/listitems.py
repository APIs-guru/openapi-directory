from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListItemsItemTypeEnum(str, Enum):
    CHAPTER = "chapter"
    HIGHLIGHT = "highlight"
    MUSIC = "music"
    SPEECH = "speech"
    OTHER = "other"

class ListItemsMixinEnum(str, Enum):
    CONTRIBUTIONS = "contributions"
    IMAGES = "images"
    OFFSET = "offset"
    PLAY_EVENT = "play_event"

class ListItemsSortEnum(str, Enum):
    PID = "pid"

class ListItemsSortDirectionEnum(str, Enum):
    DESCENDING = "descending"


@dataclass
class ListItemsQueryParams:
    authority: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authority', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id_type', 'style': 'form', 'explode': True }})
    item_type: Optional[List[ListItemsItemTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'item_type', 'style': 'form', 'explode': True }})
    mixin: Optional[List[ListItemsMixinEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    partner_pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    people: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'people', 'style': 'form', 'explode': True }})
    pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'pid', 'style': 'form', 'explode': True }})
    programme: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'programme', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    segment_event: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'segment_event', 'style': 'form', 'explode': True }})
    sort: Optional[ListItemsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_direction: Optional[ListItemsSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclass
class ListItemsRequest:
    query_params: ListItemsQueryParams = field(default=None)
    

@dataclass
class ListItemsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
