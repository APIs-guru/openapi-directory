from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsRevisionPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    revision: str = field(default=None, metadata={'path_param': { 'field_name': 'revision', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurity:
    option1: Optional[GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsRevisionRequest:
    path_params: GetSnippetsWorkspaceEncodedIDCommitsRevisionPathParams = field(default=None)
    security: GetSnippetsWorkspaceEncodedIDCommitsRevisionSecurity = field(default=None)
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsRevisionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    snippet_commit: Optional[dict[str, Any]] = field(default=None)
    
