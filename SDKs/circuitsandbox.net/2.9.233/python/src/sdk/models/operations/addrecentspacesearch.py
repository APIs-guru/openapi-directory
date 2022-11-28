from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

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
    scope: AddRecentSpaceSearchRequestBodyScopeEnum = field(metadata={'form': { 'field_name': 'scope' }})
    search_term: str = field(metadata={'form': { 'field_name': 'searchTerm' }})
    end_time: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'endTime' }})
    start_time: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'startTime' }})
    

@dataclass
class AddRecentSpaceSearchSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddRecentSpaceSearchRequest:
    request: AddRecentSpaceSearchRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddRecentSpaceSearchSecurity = field()
    

@dataclass
class AddRecentSpaceSearchResponse:
    content_type: str = field()
    status_code: int = field()
    
