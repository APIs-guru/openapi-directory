from dataclasses import dataclass, field



@dataclass
class DeleteSSHKeyPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    fingerprint: str = field(metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSSHKeyQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteSSHKeyRequest:
    path_params: DeleteSSHKeyPathParams = field()
    query_params: DeleteSSHKeyQueryParams = field()
    

@dataclass
class DeleteSSHKeyResponse:
    content_type: str = field()
    status_code: int = field()
    
