from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GistsDeleteCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GistsDeleteCommentRequest:
    path_params: GistsDeleteCommentPathParams = field()
    

@dataclass
class GistsDeleteCommentResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
