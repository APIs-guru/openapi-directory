from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchFileCommentsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchFileCommentsIDRequestBody:
    body: str = field(metadata={'multipart_form': { 'field_name': 'body' }})
    

@dataclass
class PatchFileCommentsIDRequest:
    path_params: PatchFileCommentsIDPathParams = field()
    request: PatchFileCommentsIDRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchFileCommentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    file_comment_entity: Optional[shared.FileCommentEntity] = field(default=None)
    
