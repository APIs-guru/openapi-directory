from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDPathParams:
    encoded_id: str = field(metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDRequest:
    path_params: GetSnippetsWorkspaceEncodedIDNodeIDPathParams = field()
    security: GetSnippetsWorkspaceEncodedIDNodeIDSecurity = field()
    

@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    snippet: Optional[dict[str, Any]] = field(default=None)
    
