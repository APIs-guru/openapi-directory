from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class HistoryListLoginsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    display: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'display', 'style': 'form', 'explode': True }})
    end_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_at', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    start_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_at', 'style': 'form', 'explode': True }})
    

@dataclass
class HistoryListLoginsRequest:
    query_params: HistoryListLoginsQueryParams = field(default=None)
    

@dataclass
class HistoryListLoginsResponse:
    action_entities: Optional[List[shared.ActionEntity]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
