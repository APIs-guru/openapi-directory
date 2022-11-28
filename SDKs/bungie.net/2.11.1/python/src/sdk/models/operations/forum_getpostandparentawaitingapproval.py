from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetPostAndParentAwaitingApprovalPathParams:
    child_post_id: int = field(metadata={'path_param': { 'field_name': 'childPostId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetPostAndParentAwaitingApprovalQueryParams:
    showbanned: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'showbanned', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetPostAndParentAwaitingApprovalRequest:
    path_params: ForumGetPostAndParentAwaitingApprovalPathParams = field()
    query_params: ForumGetPostAndParentAwaitingApprovalQueryParams = field()
    

@dataclass
class ForumGetPostAndParentAwaitingApprovalResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
