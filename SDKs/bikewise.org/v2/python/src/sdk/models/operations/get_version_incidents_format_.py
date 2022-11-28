from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetVersionIncidentsFormatIncidentTypeEnum(str, Enum):
    CRASH = "crash"
    HAZARD = "hazard"
    THEFT = "theft"
    UNCONFIRMED = "unconfirmed"
    INFRASTRUCTURE_ISSUE = "infrastructure_issue"
    CHOP_SHOP = "chop_shop"


@dataclass
class GetVersionIncidentsFormatQueryParams:
    incident_type: Optional[GetVersionIncidentsFormatIncidentTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'incident_type', 'style': 'form', 'explode': True }})
    occurred_after: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'occurred_after', 'style': 'form', 'explode': True }})
    occurred_before: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'occurred_before', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    proximity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'proximity', 'style': 'form', 'explode': True }})
    proximity_square: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'proximity_square', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVersionIncidentsFormatRequest:
    query_params: GetVersionIncidentsFormatQueryParams = field()
    

@dataclass
class GetVersionIncidentsFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
