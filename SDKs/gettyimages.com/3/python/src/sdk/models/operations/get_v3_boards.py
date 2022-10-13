from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3BoardsQueryParams:
    board_relationship: Optional[shared.BoardRelationshipEnum] = field(default=None, metadata={'query_param': { 'field_name': 'board_relationship', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.BoardSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3BoardsRequest:
    query_params: GetV3BoardsQueryParams = field(default=None)
    

@dataclass
class GetV3BoardsResponse:
    board_list: Optional[shared.BoardList] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
