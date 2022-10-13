from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetGlobalwinescoresLatestColorEnum(str, Enum):
    RED = "red"
    WHITE = "white"
    PINK = "pink"

class GetGlobalwinescoresLatestOrderingEnum(str, Enum):
    DATE = "date"
    MINUS_DATE = "-date"
    SCORE = "score"
    MINUS_SCORE = "-score"


@dataclass
class GetGlobalwinescoresLatestQueryParams:
    color: Optional[GetGlobalwinescoresLatestColorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    is_primeurs: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_primeurs', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lwin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lwin', 'style': 'form', 'explode': True }})
    lwin_11: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lwin_11', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    ordering: Optional[GetGlobalwinescoresLatestOrderingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    vintage: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vintage', 'style': 'form', 'explode': True }})
    wine_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'wine_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGlobalwinescoresLatestHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetGlobalwinescoresLatestRequest:
    query_params: GetGlobalwinescoresLatestQueryParams = field(default=None)
    headers: GetGlobalwinescoresLatestHeaders = field(default=None)
    

@dataclass
class GetGlobalwinescoresLatestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
