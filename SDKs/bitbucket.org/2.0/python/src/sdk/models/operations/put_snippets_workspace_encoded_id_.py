from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutSnippetsWorkspaceEncodedIDPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDSecurity:
    option1: Optional[PutSnippetsWorkspaceEncodedIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutSnippetsWorkspaceEncodedIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutSnippetsWorkspaceEncodedIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDRequest:
    path_params: PutSnippetsWorkspaceEncodedIDPathParams = field(default=None)
    security: PutSnippetsWorkspaceEncodedIDSecurity = field(default=None)
    

@dataclass
class PutSnippetsWorkspaceEncodedIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    snippet: Optional[dict[str, Any]] = field(default=None)
    
