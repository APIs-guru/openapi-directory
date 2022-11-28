from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CommunityContentGetCommunityContentPathParams:
    media_filter: int = field(metadata={'path_param': { 'field_name': 'mediaFilter', 'style': 'simple', 'explode': False }})
    page: int = field(metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    sort: int = field(metadata={'path_param': { 'field_name': 'sort', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommunityContentGetCommunityContentRequest:
    path_params: CommunityContentGetCommunityContentPathParams = field()
    

@dataclass
class CommunityContentGetCommunityContentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
