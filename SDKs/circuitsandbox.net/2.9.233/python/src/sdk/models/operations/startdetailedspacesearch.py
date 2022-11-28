from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

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
    scope: StartDetailedSpaceSearchScopeEnum = field(metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    search_term: str = field(metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    space_id: str = field(metadata={'query_param': { 'field_name': 'spaceId', 'style': 'form', 'explode': True }})
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    search_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchId', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    

@dataclass
class StartDetailedSpaceSearchSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class StartDetailedSpaceSearchRequest:
    query_params: StartDetailedSpaceSearchQueryParams = field()
    security: StartDetailedSpaceSearchSecurity = field()
    

@dataclass
class StartDetailedSpaceSearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_search_result_detailed_backs: Optional[List[Any]] = field(default=None)
    
