from dataclasses import dataclass, field



@dataclass
class DeleteDNSDomainNameRecordsRecordIDPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    record_id: str = field(metadata={'path_param': { 'field_name': 'recordId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDNSDomainNameRecordsRecordIDQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    record_id: str = field(metadata={'query_param': { 'field_name': 'record_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteDNSDomainNameRecordsRecordIDRequest:
    path_params: DeleteDNSDomainNameRecordsRecordIDPathParams = field()
    query_params: DeleteDNSDomainNameRecordsRecordIDQueryParams = field()
    

@dataclass
class DeleteDNSDomainNameRecordsRecordIDResponse:
    content_type: str = field()
    status_code: int = field()
    
