from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllSSHKeysQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllSSHKeysRequest:
    query_params: GetAllSSHKeysQueryParams = field(default=None)
    

@dataclass
class GetAllSSHKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ssh_key_details: Optional[List[shared.SSHKeyDetail]] = field(default=None)
    status_code: int = field(default=None)
    
