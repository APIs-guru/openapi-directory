from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDNSDomainNameRecordsPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDNSDomainNameRecordsQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    record_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'record_name', 'style': 'form', 'explode': True }})
    service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDNSDomainNameRecordsRequest:
    path_params: GetDNSDomainNameRecordsPathParams = field()
    query_params: GetDNSDomainNameRecordsQueryParams = field()
    

@dataclass
class GetDNSDomainNameRecordsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    dns_records: Optional[List[shared.DNSRecord]] = field(default=None)
    
