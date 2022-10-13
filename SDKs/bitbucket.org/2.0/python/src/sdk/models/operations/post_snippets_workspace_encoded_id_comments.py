from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostSnippetsWorkspaceEncodedIDCommentsPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSnippetsWorkspaceEncodedIDCommentsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostSnippetsWorkspaceEncodedIDCommentsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostSnippetsWorkspaceEncodedIDCommentsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostSnippetsWorkspaceEncodedIDCommentsSecurity:
    option1: Optional[PostSnippetsWorkspaceEncodedIDCommentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostSnippetsWorkspaceEncodedIDCommentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostSnippetsWorkspaceEncodedIDCommentsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostSnippetsWorkspaceEncodedIDCommentsRequest:
    path_params: PostSnippetsWorkspaceEncodedIDCommentsPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostSnippetsWorkspaceEncodedIDCommentsSecurity = field(default=None)
    

@dataclass
class PostSnippetsWorkspaceEncodedIDCommentsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    snippet: Optional[dict[str, Any]] = field(default=None)
    
