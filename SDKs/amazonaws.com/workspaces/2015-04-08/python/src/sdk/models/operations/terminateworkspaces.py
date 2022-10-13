from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class TerminateWorkspacesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_TERMINATE_WORKSPACES = "WorkspacesService.TerminateWorkspaces"


@dataclass
class TerminateWorkspacesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: TerminateWorkspacesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class TerminateWorkspacesRequest:
    headers: TerminateWorkspacesHeaders = field(default=None)
    request: shared.TerminateWorkspacesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TerminateWorkspacesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    terminate_workspaces_result: Optional[shared.TerminateWorkspacesResult] = field(default=None)
    
