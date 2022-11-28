from dataclasses import dataclass, field



@dataclass
class DeleteBatchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBatchRequest:
    path_params: DeleteBatchPathParams = field()
    

@dataclass
class DeleteBatchResponse:
    content_type: str = field()
    status_code: int = field()
    
