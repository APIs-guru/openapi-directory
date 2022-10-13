from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDomainsUpdatesAddedDownloadQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsUpdatesAddedDownloadRequest:
    query_params: GetDomainsUpdatesAddedDownloadQueryParams = field(default=None)
    

@dataclass
class GetDomainsUpdatesAddedDownloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
