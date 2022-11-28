from dataclasses import dataclass, field



@dataclass
class DeleteProductMemberPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProductMemberRequest:
    path_params: DeleteProductMemberPathParams = field()
    

@dataclass
class DeleteProductMemberResponse:
    content_type: str = field()
    status_code: int = field()
    
