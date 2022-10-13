from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutRegistryNamespacesNamespacePathParams:
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRegistryNamespacesNamespaceHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PutRegistryNamespacesNamespaceRequest:
    path_params: PutRegistryNamespacesNamespacePathParams = field(default=None)
    headers: PutRegistryNamespacesNamespaceHeaders = field(default=None)
    

@dataclass
class PutRegistryNamespacesNamespaceResponse:
    content_type: str = field(default=None)
    namespace: Optional[shared.Namespace] = field(default=None)
    status_code: int = field(default=None)
    
