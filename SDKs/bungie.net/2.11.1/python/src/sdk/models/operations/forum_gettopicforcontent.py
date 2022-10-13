from dataclasses import dataclass, field



@dataclass
class ForumGetTopicForContentPathParams:
    content_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetTopicForContentRequest:
    path_params: ForumGetTopicForContentPathParams = field(default=None)
    

@dataclass
class ForumGetTopicForContentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
