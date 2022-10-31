from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRegistryNamespacesNamespacePathParams:
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegistryNamespacesNamespaceHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegistryNamespacesNamespaceRequest:
    path_params: GetRegistryNamespacesNamespacePathParams = field(default=None)
    headers: GetRegistryNamespacesNamespaceHeaders = field(default=None)
    

@dataclass
class GetRegistryNamespacesNamespaceResponse:
    content_type: str = field(default=None)
    namespace: Optional[shared.Namespace] = field(default=None)
    status_code: int = field(default=None)
    
