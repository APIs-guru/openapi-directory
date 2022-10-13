from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class RebuildWorkspacesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_REBUILD_WORKSPACES = "WorkspacesService.RebuildWorkspaces"


@dataclass
class RebuildWorkspacesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RebuildWorkspacesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RebuildWorkspacesRequest:
    headers: RebuildWorkspacesHeaders = field(default=None)
    request: shared.RebuildWorkspacesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RebuildWorkspacesResponse:
    content_type: str = field(default=None)
    rebuild_workspaces_result: Optional[shared.RebuildWorkspacesResult] = field(default=None)
    status_code: int = field(default=None)
    
