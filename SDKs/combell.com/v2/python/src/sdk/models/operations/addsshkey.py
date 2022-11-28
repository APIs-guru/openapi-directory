from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddSSHKeyPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddSSHKeyQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class AddSSHKeyRequest:
    path_params: AddSSHKeyPathParams = field()
    query_params: AddSSHKeyQueryParams = field()
    request: Optional[shared.AddSSHKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddSSHKeyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
