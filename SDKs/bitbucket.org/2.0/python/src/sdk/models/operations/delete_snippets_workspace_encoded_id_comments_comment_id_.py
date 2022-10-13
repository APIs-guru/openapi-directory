from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity:
    option1: Optional[DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDRequest:
    path_params: DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDPathParams = field(default=None)
    security: DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDSecurity = field(default=None)
    

@dataclass
class DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
