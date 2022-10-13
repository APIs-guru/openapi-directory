from dataclasses import dataclass, field



@dataclass
class CommunityContentGetCommunityContentPathParams:
    media_filter: int = field(default=None, metadata={'path_param': { 'field_name': 'mediaFilter', 'style': 'simple', 'explode': False }})
    page: int = field(default=None, metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    sort: int = field(default=None, metadata={'path_param': { 'field_name': 'sort', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommunityContentGetCommunityContentRequest:
    path_params: CommunityContentGetCommunityContentPathParams = field(default=None)
    

@dataclass
class CommunityContentGetCommunityContentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
