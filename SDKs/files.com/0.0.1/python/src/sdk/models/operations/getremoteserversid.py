from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRemoteServersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRemoteServersIDRequest:
    path_params: GetRemoteServersIDPathParams = field(default=None)
    

@dataclass
class GetRemoteServersIDResponse:
    content_type: str = field(default=None)
    remote_server_entity: Optional[shared.RemoteServerEntity] = field(default=None)
    status_code: int = field(default=None)
    
