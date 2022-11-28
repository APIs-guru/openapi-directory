from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FileCommentListForPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileCommentListForPathQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class FileCommentListForPathRequest:
    path_params: FileCommentListForPathPathParams = field()
    query_params: FileCommentListForPathQueryParams = field()
    

@dataclass
class FileCommentListForPathResponse:
    content_type: str = field()
    status_code: int = field()
    file_comment_entities: Optional[List[shared.FileCommentEntity]] = field(default=None)
    
