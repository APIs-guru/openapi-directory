from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDNSDomainNameRecordsPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDNSDomainNameRecordsQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    record_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'record_name', 'style': 'form', 'explode': True }})
    service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDNSDomainNameRecordsRequest:
    path_params: GetDNSDomainNameRecordsPathParams = field(default=None)
    query_params: GetDNSDomainNameRecordsQueryParams = field(default=None)
    

@dataclass
class GetDNSDomainNameRecordsResponse:
    content_type: str = field(default=None)
    dns_records: Optional[List[shared.DNSRecord]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
