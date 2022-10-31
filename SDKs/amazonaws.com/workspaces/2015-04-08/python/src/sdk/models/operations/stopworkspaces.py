from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class StopWorkspacesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_STOP_WORKSPACES = "WorkspacesService.StopWorkspaces"


@dataclass
class StopWorkspacesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StopWorkspacesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopWorkspacesRequest:
    headers: StopWorkspacesHeaders = field(default=None)
    request: shared.StopWorkspacesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopWorkspacesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    stop_workspaces_result: Optional[shared.StopWorkspacesResult] = field(default=None)
    
