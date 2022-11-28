from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
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
    headers: GetV3SearchEventsHeaders = field()
    query_params: GetV3SearchEventsQueryParams = field()
    

@dataclass
class GetV3SearchEventsResponse:
    content_type: str = field()
    status_code: int = field()
    events_search_result: Optional[shared.EventsSearchResult] = field(default=None)
    
