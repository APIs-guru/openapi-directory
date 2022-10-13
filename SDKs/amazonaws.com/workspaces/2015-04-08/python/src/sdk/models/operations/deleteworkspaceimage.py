from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteWorkspaceImageXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_DELETE_WORKSPACE_IMAGE = "WorkspacesService.DeleteWorkspaceImage"


@dataclass
class DeleteWorkspaceImageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteWorkspaceImageXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteWorkspaceImageRequest:
    headers: DeleteWorkspaceImageHeaders = field(default=None)
    request: shared.DeleteWorkspaceImageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteWorkspaceImageResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    delete_workspace_image_result: Optional[dict[str, Any]] = field(default=None)
    invalid_resource_state_exception: Optional[Any] = field(default=None)
    resource_associated_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
