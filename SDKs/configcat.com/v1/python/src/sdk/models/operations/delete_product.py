from dataclasses import dataclass, field



@dataclass
class DeleteProductPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductRequest:
    path_params: DeleteProductPathParams = field()
    

@dataclass
class DeleteProductResponse:
    content_type: str = field()
    status_code: int = field()
    
