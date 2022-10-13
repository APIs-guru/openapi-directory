from dataclasses import dataclass, field



@dataclass
class DeleteBundlesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBundlesIDRequest:
    path_params: DeleteBundlesIDPathParams = field(default=None)
    

@dataclass
class DeleteBundlesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
