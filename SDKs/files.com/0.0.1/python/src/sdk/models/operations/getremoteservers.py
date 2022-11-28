from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRemoteServersQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoteServersRequest:
    query_params: GetRemoteServersQueryParams = field()
    

@dataclass
class GetRemoteServersResponse:
    content_type: str = field()
    status_code: int = field()
    remote_server_entities: Optional[List[shared.RemoteServerEntity]] = field(default=None)
    
