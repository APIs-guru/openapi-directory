from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRemoteServersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRemoteServersIDRequest:
    path_params: GetRemoteServersIDPathParams = field()
    

@dataclass
class GetRemoteServersIDResponse:
    content_type: str = field()
    status_code: int = field()
    remote_server_entity: Optional[shared.RemoteServerEntity] = field(default=None)
    
