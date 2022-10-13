from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteSnippetsWorkspaceEncodedIDNodeIDPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDNodeIDSecurity:
    option1: Optional[DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteSnippetsWorkspaceEncodedIDNodeIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDNodeIDRequest:
    path_params: DeleteSnippetsWorkspaceEncodedIDNodeIDPathParams = field(default=None)
    security: DeleteSnippetsWorkspaceEncodedIDNodeIDSecurity = field(default=None)
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDNodeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
