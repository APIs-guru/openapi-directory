from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutSnippetsWorkspaceEncodedIDNodeIDPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDNodeIDSecurity:
    option1: Optional[PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutSnippetsWorkspaceEncodedIDNodeIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDNodeIDRequest:
    path_params: PutSnippetsWorkspaceEncodedIDNodeIDPathParams = field(default=None)
    security: PutSnippetsWorkspaceEncodedIDNodeIDSecurity = field(default=None)
    

@dataclass
class PutSnippetsWorkspaceEncodedIDNodeIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    snippet: Optional[dict[str, Any]] = field(default=None)
    
