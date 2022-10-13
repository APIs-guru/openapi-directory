from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDNSDomainNameRecordsRecordIDPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    record_id: str = field(default=None, metadata={'path_param': { 'field_name': 'recordId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDNSDomainNameRecordsRecordIDQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    record_id: str = field(default=None, metadata={'query_param': { 'field_name': 'record_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDNSDomainNameRecordsRecordIDRequest:
    path_params: GetDNSDomainNameRecordsRecordIDPathParams = field(default=None)
    query_params: GetDNSDomainNameRecordsRecordIDQueryParams = field(default=None)
    

@dataclass
class GetDNSDomainNameRecordsRecordIDResponse:
    content_type: str = field(default=None)
    dns_record: Optional[shared.DNSRecord] = field(default=None)
    status_code: int = field(default=None)
    
