from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity:
    option1: Optional[GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDRequest:
    path_params: GetSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams = field(default=None)
    security: GetSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity = field(default=None)
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsCommentIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    snippet_comment: Optional[dict[str, Any]] = field(default=None)
    
