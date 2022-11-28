from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetDomainsUpdatesDeletedDownloadQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsUpdatesDeletedDownloadRequest:
    query_params: GetDomainsUpdatesDeletedDownloadQueryParams = field()
    

@dataclass
class GetDomainsUpdatesDeletedDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    
