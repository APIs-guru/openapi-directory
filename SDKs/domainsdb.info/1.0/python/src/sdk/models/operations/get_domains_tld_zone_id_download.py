from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDomainsTldZoneIDDownloadPathParams:
    zone_id: str = field(default=None, metadata={'path_param': { 'field_name': 'zone_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainsTldZoneIDDownloadQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsTldZoneIDDownloadRequest:
    path_params: GetDomainsTldZoneIDDownloadPathParams = field(default=None)
    query_params: GetDomainsTldZoneIDDownloadQueryParams = field(default=None)
    

@dataclass
class GetDomainsTldZoneIDDownloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
