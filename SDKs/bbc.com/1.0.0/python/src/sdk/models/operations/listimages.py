from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListImagesEmbargoedEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"
    ONLY = "only"

class ListImagesImageTypeEnum(str, Enum):
    STANDARD = "standard"
    PODCAST = "podcast"
    STORE = "store"
    PORTRAIT = "portrait"
    LETTERBOX = "letterbox"

class ListImagesSortEnum(str, Enum):
    GROUP_POSITION = "group_position"
    PID = "pid"

class ListImagesSortDirectionEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"


@dataclass
class ListImagesQueryParams:
    embargoed: Optional[ListImagesEmbargoedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embargoed', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    image_type: Optional[List[ListImagesImageTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'image_type', 'style': 'form', 'explode': True }})
    is_alternate_image_for: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_alternate_image_for', 'style': 'form', 'explode': True }})
    is_image_for: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_image_for', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    partner_pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'pid', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[ListImagesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_direction: Optional[ListImagesSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclass
class ListImagesRequest:
    query_params: ListImagesQueryParams = field(default=None)
    

@dataclass
class ListImagesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
