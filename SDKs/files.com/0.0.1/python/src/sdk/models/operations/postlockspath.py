from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostLocksPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLocksPathRequestBody:
    allow_access_by_any_user: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'allow_access_by_any_user' }})
    exclusive: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'exclusive' }})
    recursive: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'recursive' }})
    timeout: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'timeout' }})
    

@dataclass
class PostLocksPathRequest:
    path_params: PostLocksPathPathParams = field()
    request: Optional[PostLocksPathRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostLocksPathResponse:
    content_type: str = field()
    status_code: int = field()
    lock_entity: Optional[shared.LockEntity] = field(default=None)
    
