from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostFoldersPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostFoldersPathRequest:
    path_params: PostFoldersPathPathParams = field(default=None)
    

@dataclass
class PostFoldersPathResponse:
    content_type: str = field(default=None)
    file_entity: Optional[shared.FileEntity] = field(default=None)
    status_code: int = field(default=None)
    
