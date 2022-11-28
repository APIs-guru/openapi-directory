from dataclasses import dataclass, field



@dataclass
class DeleteBundlesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBundlesIDRequest:
    path_params: DeleteBundlesIDPathParams = field()
    

@dataclass
class DeleteBundlesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
