from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional

class AddRecentSpaceSearchRequestBodyScopeEnum(str, Enum):
    ALL = "ALL"
    SPACES = "SPACES"
    TOPICBY = "TOPICBY"
    FILES = "FILES"
    TAGS = "TAGS"
    LABELS = "LABELS"
    DATE = "DATE"


@dataclass
class AddRecentSpaceSearchRequestBody:
    end_time: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'endTime' }})
    scope: AddRecentSpaceSearchRequestBodyScopeEnum = field(default=None, metadata={'form': { 'field_name': 'scope' }})
    search_term: str = field(default=None, metadata={'form': { 'field_name': 'searchTerm' }})
    start_time: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'startTime' }})
    

@dataclass
class AddRecentSpaceSearchSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddRecentSpaceSearchRequest:
    request: AddRecentSpaceSearchRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddRecentSpaceSearchSecurity = field(default=None)
    

@dataclass
class AddRecentSpaceSearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
