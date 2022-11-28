from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class HistoryListForUserPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class HistoryListForUserQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    display: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'display', 'style': 'form', 'explode': True }})
    end_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_at', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    start_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_at', 'style': 'form', 'explode': True }})
    

@dataclass
class HistoryListForUserRequest:
    path_params: HistoryListForUserPathParams = field()
    query_params: HistoryListForUserQueryParams = field()
    

@dataclass
class HistoryListForUserResponse:
    content_type: str = field()
    status_code: int = field()
    action_entities: Optional[List[shared.ActionEntity]] = field(default=None)
    
