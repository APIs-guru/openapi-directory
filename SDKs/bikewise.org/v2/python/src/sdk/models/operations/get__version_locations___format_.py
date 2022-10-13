from dataclasses import dataclass, field
from typing import Enum,Optional

class GetVersionLocationsFormatIncidentTypeEnum(str, Enum):
    CRASH = "crash"
    HAZARD = "hazard"
    THEFT = "theft"
    UNCONFIRMED = "unconfirmed"
    INFRASTRUCTURE_ISSUE = "infrastructure_issue"
    CHOP_SHOP = "chop_shop"


@dataclass
class GetVersionLocationsFormatQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    incident_type: Optional[GetVersionLocationsFormatIncidentTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'incident_type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    occurred_after: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'occurred_after', 'style': 'form', 'explode': True }})
    occurred_before: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'occurred_before', 'style': 'form', 'explode': True }})
    proximity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proximity', 'style': 'form', 'explode': True }})
    proximity_square: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'proximity_square', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVersionLocationsFormatRequest:
    query_params: GetVersionLocationsFormatQueryParams = field(default=None)
    

@dataclass
class GetVersionLocationsFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
