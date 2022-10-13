from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional

class StartDetailedSpaceSearchScopeEnum(str, Enum):
    ALL = "ALL"
    SPACES = "SPACES"
    TOPICBY = "TOPICBY"
    FILES = "FILES"
    TAGS = "TAGS"
    LABELS = "LABELS"
    DATE = "DATE"


@dataclass
class StartDetailedSpaceSearchQueryParams:
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    scope: StartDetailedSpaceSearchScopeEnum = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    search_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchId', 'style': 'form', 'explode': True }})
    search_term: str = field(default=None, metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    space_id: str = field(default=None, metadata={'query_param': { 'field_name': 'spaceId', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    

@dataclass
class StartDetailedSpaceSearchSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StartDetailedSpaceSearchRequest:
    query_params: StartDetailedSpaceSearchQueryParams = field(default=None)
    security: StartDetailedSpaceSearchSecurity = field(default=None)
    

@dataclass
class StartDetailedSpaceSearchResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    space_search_result_detailed_backs: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
