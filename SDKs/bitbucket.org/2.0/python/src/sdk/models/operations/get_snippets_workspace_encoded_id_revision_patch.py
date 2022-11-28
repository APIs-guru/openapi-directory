from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchPathParams:
    encoded_id: str = field(metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    revision: str = field(metadata={'path_param': { 'field_name': 'revision', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchRequest:
    path_params: GetSnippetsWorkspaceEncodedIDRevisionPatchPathParams = field()
    security: GetSnippetsWorkspaceEncodedIDRevisionPatchSecurity = field()
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
