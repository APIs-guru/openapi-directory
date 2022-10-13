from dataclasses import dataclass, field



@dataclass
class DeleteTagPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTagRequest:
    path_params: DeleteTagPathParams = field(default=None)
    

@dataclass
class DeleteTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
