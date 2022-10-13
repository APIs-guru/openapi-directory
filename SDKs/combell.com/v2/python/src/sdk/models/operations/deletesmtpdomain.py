from dataclasses import dataclass, field



@dataclass
class DeleteSMTPDomainPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    hostname: str = field(default=None, metadata={'path_param': { 'field_name': 'hostname', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSMTPDomainQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteSMTPDomainRequest:
    path_params: DeleteSMTPDomainPathParams = field(default=None)
    query_params: DeleteSMTPDomainQueryParams = field(default=None)
    

@dataclass
class DeleteSMTPDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
