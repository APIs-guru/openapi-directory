from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteSnippetsWorkspaceEncodedIDPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDSecurity:
    option1: Optional[DeleteSnippetsWorkspaceEncodedIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteSnippetsWorkspaceEncodedIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteSnippetsWorkspaceEncodedIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDRequest:
    path_params: DeleteSnippetsWorkspaceEncodedIDPathParams = field(default=None)
    security: DeleteSnippetsWorkspaceEncodedIDSecurity = field(default=None)
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
