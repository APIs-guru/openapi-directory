from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FileCommentListForPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileCommentListForPathQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class FileCommentListForPathRequest:
    path_params: FileCommentListForPathPathParams = field(default=None)
    query_params: FileCommentListForPathQueryParams = field(default=None)
    

@dataclass
class FileCommentListForPathResponse:
    content_type: str = field(default=None)
    file_comment_entities: Optional[List[shared.FileCommentEntity]] = field(default=None)
    status_code: int = field(default=None)
    
