from dataclasses import dataclass, field



@dataclass
class DeleteBatchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBatchRequest:
    path_params: DeleteBatchPathParams = field(default=None)
    

@dataclass
class DeleteBatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
