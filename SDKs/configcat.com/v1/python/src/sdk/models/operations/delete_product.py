from dataclasses import dataclass, field



@dataclass
class DeleteProductPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductRequest:
    path_params: DeleteProductPathParams = field(default=None)
    

@dataclass
class DeleteProductResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
