from dataclasses import dataclass, field



@dataclass
class DeleteTagPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTagRequest:
    path_params: DeleteTagPathParams = field()
    

@dataclass
class DeleteTagResponse:
    content_type: str = field()
    status_code: int = field()
    
