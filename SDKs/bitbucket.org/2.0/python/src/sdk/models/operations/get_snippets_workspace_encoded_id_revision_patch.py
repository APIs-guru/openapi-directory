from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    revision: str = field(default=None, metadata={'path_param': { 'field_name': 'revision', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchSecurity:
    option1: Optional[GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetSnippetsWorkspaceEncodedIDRevisionPatchSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchRequest:
    path_params: GetSnippetsWorkspaceEncodedIDRevisionPatchPathParams = field(default=None)
    security: GetSnippetsWorkspaceEncodedIDRevisionPatchSecurity = field(default=None)
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionPatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
