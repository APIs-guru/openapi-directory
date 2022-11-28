from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class ListHistoricalGwsColorEnum(str, Enum):
    RED = "red"
    WHITE = "white"
    PINK = "pink"

class ListHistoricalGwsOrderingEnum(str, Enum):
    DATE = "date"
    MINUS_DATE = "-date"
    SCORE = "score"
    MINUS_SCORE = "-score"


@dataclass
class ListHistoricalGwsQueryParams:
    color: Optional[ListHistoricalGwsColorEnum] = field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    is_primeurs: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_primeurs', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lwin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lwin', 'style': 'form', 'explode': True }})
    lwin_11: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lwin_11', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    ordering: Optional[ListHistoricalGwsOrderingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    vintage: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vintage', 'style': 'form', 'explode': True }})
    wine_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'wine_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListHistoricalGwsHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListHistoricalGwsRequest:
    headers: ListHistoricalGwsHeaders = field()
    query_params: ListHistoricalGwsQueryParams = field()
    

@dataclass
class ListHistoricalGwsResponse:
    content_type: str = field()
    status_code: int = field()
    
