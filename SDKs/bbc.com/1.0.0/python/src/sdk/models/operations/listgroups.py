from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListGroupsEmbargoedEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"
    ONLY = "only"

class ListGroupsGroupTypeEnum(str, Enum):
    COLLECTION = "collection"
    FRANCHISE = "franchise"
    GALLERY = "gallery"
    SEASON = "season"

class ListGroupsMixinEnum(str, Enum):
    ALTERNATE_IMAGES = "alternate_images"
    GROUP_FOR = "group_for"
    IMAGES = "images"
    RELATED_LINKS = "related_links"

class ListGroupsSortEnum(str, Enum):
    PID = "pid"

class ListGroupsSortDirectionEnum(str, Enum):
    DESCENDING = "descending"


@dataclass
class ListGroupsQueryParams:
    embargoed: Optional[ListGroupsEmbargoedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'embargoed', 'style': 'form', 'explode': True }})
    for_descendants_of: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'for_descendants_of', 'style': 'form', 'explode': True }})
    for_programme: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'for_programme', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    group_type: Optional[List[ListGroupsGroupTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'group_type', 'style': 'form', 'explode': True }})
    member: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'member', 'style': 'form', 'explode': True }})
    mixin: Optional[List[ListGroupsMixinEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    partner_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_id', 'style': 'form', 'explode': True }})
    partner_pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'partner_pid', 'style': 'form', 'explode': True }})
    pid: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'pid', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[ListGroupsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_direction: Optional[ListGroupsSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclass
class ListGroupsRequest:
    query_params: ListGroupsQueryParams = field(default=None)
    

@dataclass
class ListGroupsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
