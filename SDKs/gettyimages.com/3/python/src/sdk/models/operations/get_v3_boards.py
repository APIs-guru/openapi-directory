from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3BoardsQueryParams:
    board_relationship: Optional[shared.BoardRelationshipEnum] = field(default=None, metadata={'query_param': { 'field_name': 'board_relationship', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.BoardSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3BoardsRequest:
    query_params: GetV3BoardsQueryParams = field()
    

@dataclass
class GetV3BoardsResponse:
    content_type: str = field()
    status_code: int = field()
    board_list: Optional[shared.BoardList] = field(default=None)
    
