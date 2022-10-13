from dataclasses import dataclass, field



@dataclass
class DeleteDNSDomainNameRecordsRecordIDPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    record_id: str = field(default=None, metadata={'path_param': { 'field_name': 'recordId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDNSDomainNameRecordsRecordIDQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    record_id: str = field(default=None, metadata={'query_param': { 'field_name': 'record_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteDNSDomainNameRecordsRecordIDRequest:
    path_params: DeleteDNSDomainNameRecordsRecordIDPathParams = field(default=None)
    query_params: DeleteDNSDomainNameRecordsRecordIDQueryParams = field(default=None)
    

@dataclass
class DeleteDNSDomainNameRecordsRecordIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
