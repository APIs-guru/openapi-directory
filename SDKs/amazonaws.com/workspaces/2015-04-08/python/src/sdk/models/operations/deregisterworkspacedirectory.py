from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeregisterWorkspaceDirectoryXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_DEREGISTER_WORKSPACE_DIRECTORY = "WorkspacesService.DeregisterWorkspaceDirectory"


@dataclass
class DeregisterWorkspaceDirectoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeregisterWorkspaceDirectoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeregisterWorkspaceDirectoryRequest:
    headers: DeregisterWorkspaceDirectoryHeaders = field(default=None)
    request: shared.DeregisterWorkspaceDirectoryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeregisterWorkspaceDirectoryResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    deregister_workspace_directory_result: Optional[dict[str, Any]] = field(default=None)
    invalid_parameter_values_exception: Optional[Any] = field(default=None)
    invalid_resource_state_exception: Optional[Any] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
