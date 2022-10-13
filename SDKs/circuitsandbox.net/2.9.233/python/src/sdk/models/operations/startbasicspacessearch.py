from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional

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
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    priority_spaces: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'prioritySpaces', 'style': 'form', 'explode': True }})
    scope: StartBasicSpacesSearchScopeEnum = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    search_term: str = field(default=None, metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    

@dataclass
class StartBasicSpacesSearchSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StartBasicSpacesSearchRequest:
    query_params: StartBasicSpacesSearchQueryParams = field(default=None)
    security: StartBasicSpacesSearchSecurity = field(default=None)
    

@dataclass
class StartBasicSpacesSearchResponse:
    basic_search_result: Optional[Any] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
