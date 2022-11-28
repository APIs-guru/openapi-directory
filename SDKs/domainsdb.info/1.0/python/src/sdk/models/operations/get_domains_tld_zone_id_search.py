from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainsTldZoneIDSearchPathParams:
    zone_id: str = field(metadata={'path_param': { 'field_name': 'zone_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainsTldZoneIDSearchQueryParams:
    a: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'A', 'style': 'form', 'explode': True }})
    cname: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CNAME', 'style': 'form', 'explode': True }})
    mx: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MX', 'style': 'form', 'explode': True }})
    ns: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NS', 'style': 'form', 'explode': True }})
    txt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TXT', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    is_dead: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isDead', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsTldZoneIDSearchRequest:
    path_params: GetDomainsTldZoneIDSearchPathParams = field()
    query_params: GetDomainsTldZoneIDSearchQueryParams = field()
    

@dataclass
class GetDomainsTldZoneIDSearchResponse:
    content_type: str = field()
    status_code: int = field()
    search_results: Optional[shared.SearchResults] = field(default=None)
    
