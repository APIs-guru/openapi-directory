from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3SearchEventsQueryParams:
    date_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    editorial_segment: Optional[shared.EditorialSegmentContractEnum] = field(default=None, metadata={'query_param': { 'field_name': 'editorial_segment', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.EventFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    phrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3SearchEventsHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    gi_country_code: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'GI-Country-Code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3SearchEventsRequest:
    query_params: GetV3SearchEventsQueryParams = field(default=None)
    headers: GetV3SearchEventsHeaders = field(default=None)
    

@dataclass
class GetV3SearchEventsResponse:
    content_type: str = field(default=None)
    events_search_result: Optional[shared.EventsSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
