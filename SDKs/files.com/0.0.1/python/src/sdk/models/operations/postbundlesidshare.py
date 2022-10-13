from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostBundlesIDSharePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostBundlesIDShareRequestBody:
    note: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'note' }})
    recipients: Optional[List[dict[str, Any]]] = field(default=None, metadata={'multipart_form': { 'field_name': 'recipients', 'json': True }})
    to: Optional[List[str]] = field(default=None, metadata={'multipart_form': { 'field_name': 'to' }})
    

@dataclass
class PostBundlesIDShareRequest:
    path_params: PostBundlesIDSharePathParams = field(default=None)
    request: Optional[PostBundlesIDShareRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostBundlesIDShareResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
