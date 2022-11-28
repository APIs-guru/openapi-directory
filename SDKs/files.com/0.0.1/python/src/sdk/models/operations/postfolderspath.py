from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostFoldersPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostFoldersPathRequest:
    path_params: PostFoldersPathPathParams = field()
    

@dataclass
class PostFoldersPathResponse:
    content_type: str = field()
    status_code: int = field()
    file_entity: Optional[shared.FileEntity] = field(default=None)
    
