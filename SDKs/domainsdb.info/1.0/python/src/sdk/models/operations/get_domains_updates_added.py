from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainsUpdatesAddedQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsUpdatesAddedRequest:
    query_params: GetDomainsUpdatesAddedQueryParams = field()
    

@dataclass
class GetDomainsUpdatesAddedResponse:
    content_type: str = field()
    status_code: int = field()
    search_results: Optional[shared.SearchResults] = field(default=None)
    
