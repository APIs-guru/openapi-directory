from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetPostAndParentAwaitingApprovalPathParams:
    child_post_id: int = field(default=None, metadata={'path_param': { 'field_name': 'childPostId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetPostAndParentAwaitingApprovalQueryParams:
    showbanned: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'showbanned', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetPostAndParentAwaitingApprovalRequest:
    path_params: ForumGetPostAndParentAwaitingApprovalPathParams = field(default=None)
    query_params: ForumGetPostAndParentAwaitingApprovalQueryParams = field(default=None)
    

@dataclass
class ForumGetPostAndParentAwaitingApprovalResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
