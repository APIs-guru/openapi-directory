from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostSnippetsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostSnippetsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostSnippetsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostSnippetsSecurity:
    option1: Optional[PostSnippetsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostSnippetsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostSnippetsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostSnippetsRequest:
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostSnippetsSecurity = field(default=None)
    

@dataclass
class PostSnippetsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    snippet: Optional[dict[str, Any]] = field(default=None)
    
