from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class HistoryListQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    display: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'display', 'style': 'form', 'explode': True }})
    end_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_at', 'style': 'form', 'explode': True }})
    filter: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_gt: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_gt', 'style': 'form', 'explode': True }})
    filter_gteq: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_gteq', 'style': 'form', 'explode': True }})
    filter_like: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_like', 'style': 'form', 'explode': True }})
    filter_lt: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_lt', 'style': 'form', 'explode': True }})
    filter_lteq: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'filter_lteq', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    start_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_at', 'style': 'form', 'explode': True }})
    

@dataclass
class HistoryListRequest:
    query_params: HistoryListQueryParams = field(default=None)
    

@dataclass
class HistoryListResponse:
    action_entities: Optional[List[shared.ActionEntity]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
