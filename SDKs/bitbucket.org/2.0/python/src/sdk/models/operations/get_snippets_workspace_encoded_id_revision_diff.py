from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffPathParams:
    encoded_id: str = field(metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    revision: str = field(metadata={'path_param': { 'field_name': 'revision', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffQueryParams:
    path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffRequest:
    path_params: GetSnippetsWorkspaceEncodedIDRevisionDiffPathParams = field()
    query_params: GetSnippetsWorkspaceEncodedIDRevisionDiffQueryParams = field()
    security: GetSnippetsWorkspaceEncodedIDRevisionDiffSecurity = field()
    

@dataclass
class GetSnippetsWorkspaceEncodedIDRevisionDiffResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
