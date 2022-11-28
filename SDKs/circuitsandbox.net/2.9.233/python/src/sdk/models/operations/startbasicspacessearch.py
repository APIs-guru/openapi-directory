from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class StartBasicSpacesSearchScopeEnum(str, Enum):
    ALL = "ALL"
    SPACES = "SPACES"
    TOPICBY = "TOPICBY"
    FILES = "FILES"
    TAGS = "TAGS"
    LABELS = "LABELS"
    DATE = "DATE"


@dataclass
class StartBasicSpacesSearchQueryParams:
    scope: StartBasicSpacesSearchScopeEnum = field(metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    search_term: str = field(metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    priority_spaces: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'prioritySpaces', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    

@dataclass
class StartBasicSpacesSearchSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StartBasicSpacesSearchRequest:
    query_params: StartBasicSpacesSearchQueryParams = field()
    security: StartBasicSpacesSearchSecurity = field()
    

@dataclass
class StartBasicSpacesSearchResponse:
    content_type: str = field()
    status_code: int = field()
    basic_search_result: Optional[Any] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
