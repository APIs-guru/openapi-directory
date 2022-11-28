from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRegistryNamespacesHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegistryNamespacesRequest:
    headers: GetRegistryNamespacesHeaders = field()
    

@dataclass
class GetRegistryNamespacesResponse:
    content_type: str = field()
    status_code: int = field()
    namespace: Optional[shared.Namespace] = field(default=None)
    
