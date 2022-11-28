from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSSHKeysPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSSHKeysQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSSHKeysRequest:
    path_params: GetSSHKeysPathParams = field()
    query_params: GetSSHKeysQueryParams = field()
    

@dataclass
class GetSSHKeysResponse:
    content_type: str = field()
    status_code: int = field()
    ssh_keys: Optional[List[shared.SSHKey]] = field(default=None)
    
