from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetDomainsTldZoneIDDownloadPathParams:
    zone_id: str = field(metadata={'path_param': { 'field_name': 'zone_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainsTldZoneIDDownloadQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsTldZoneIDDownloadRequest:
    path_params: GetDomainsTldZoneIDDownloadPathParams = field()
    query_params: GetDomainsTldZoneIDDownloadQueryParams = field()
    

@dataclass
class GetDomainsTldZoneIDDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    
