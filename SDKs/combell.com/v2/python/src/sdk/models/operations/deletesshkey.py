from dataclasses import dataclass, field



@dataclass
class DeleteSSHKeyPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    fingerprint: str = field(default=None, metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSSHKeyQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteSSHKeyRequest:
    path_params: DeleteSSHKeyPathParams = field(default=None)
    query_params: DeleteSSHKeyQueryParams = field(default=None)
    

@dataclass
class DeleteSSHKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
