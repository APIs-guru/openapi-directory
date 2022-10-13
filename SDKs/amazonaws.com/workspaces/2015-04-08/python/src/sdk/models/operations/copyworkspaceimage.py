from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CopyWorkspaceImageXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_COPY_WORKSPACE_IMAGE = "WorkspacesService.CopyWorkspaceImage"


@dataclass
class CopyWorkspaceImageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CopyWorkspaceImageXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CopyWorkspaceImageRequest:
    headers: CopyWorkspaceImageHeaders = field(default=None)
    request: shared.CopyWorkspaceImageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CopyWorkspaceImageResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    copy_workspace_image_result: Optional[shared.CopyWorkspaceImageResult] = field(default=None)
    invalid_parameter_values_exception: Optional[Any] = field(default=None)
    operation_not_supported_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    resource_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
