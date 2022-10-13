from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddSSHKeyPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddSSHKeyQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class AddSSHKeyRequest:
    path_params: AddSSHKeyPathParams = field(default=None)
    query_params: AddSSHKeyQueryParams = field(default=None)
    request: Optional[shared.AddSSHKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddSSHKeyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
