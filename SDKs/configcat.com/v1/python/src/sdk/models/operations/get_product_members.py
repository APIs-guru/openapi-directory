from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProductMembersPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductMembersRequest:
    path_params: GetProductMembersPathParams = field()
    

@dataclass
class GetProductMembersResponse:
    content_type: str = field()
    status_code: int = field()
    member_models: Optional[List[shared.MemberModel]] = field(default=None)
    
