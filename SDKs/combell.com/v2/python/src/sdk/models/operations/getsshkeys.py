from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSSHKeysPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSSHKeysQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSSHKeysRequest:
    path_params: GetSSHKeysPathParams = field(default=None)
    query_params: GetSSHKeysQueryParams = field(default=None)
    

@dataclass
class GetSSHKeysResponse:
    content_type: str = field(default=None)
    ssh_keys: Optional[List[shared.SSHKey]] = field(default=None)
    status_code: int = field(default=None)
    
