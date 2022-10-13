from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDFilesPathPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurity:
    option1: Optional[GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDFilesPathRequest:
    path_params: GetSnippetsWorkspaceEncodedIDNodeIDFilesPathPathParams = field(default=None)
    security: GetSnippetsWorkspaceEncodedIDNodeIDFilesPathSecurity = field(default=None)
    

@dataclass
class GetSnippetsWorkspaceEncodedIDNodeIDFilesPathResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
