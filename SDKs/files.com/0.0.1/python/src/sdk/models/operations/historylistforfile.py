from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class HistoryListForFilePathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class HistoryListForFileQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    display: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'display', 'style': 'form', 'explode': True }})
    end_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_at', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    start_at: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_at', 'style': 'form', 'explode': True }})
    

@dataclass
class HistoryListForFileRequest:
    path_params: HistoryListForFilePathParams = field(default=None)
    query_params: HistoryListForFileQueryParams = field(default=None)
    

@dataclass
class HistoryListForFileResponse:
    action_entities: Optional[List[shared.ActionEntity]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
