from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDNSDomainNameRecordsRecordIDPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    record_id: str = field(metadata={'path_param': { 'field_name': 'recordId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDNSDomainNameRecordsRecordIDQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    record_id: str = field(metadata={'query_param': { 'field_name': 'record_id', 'style': 'form', 'explode': True }})
    

@dataclass
class PutDNSDomainNameRecordsRecordIDRequest:
    path_params: PutDNSDomainNameRecordsRecordIDPathParams = field()
    query_params: PutDNSDomainNameRecordsRecordIDQueryParams = field()
    request: Optional[shared.DNSRecord] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDNSDomainNameRecordsRecordIDResponse:
    content_type: str = field()
    status_code: int = field()
    
