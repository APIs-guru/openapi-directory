from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProductMembersPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductMembersRequest:
    path_params: GetProductMembersPathParams = field(default=None)
    

@dataclass
class GetProductMembersResponse:
    content_type: str = field(default=None)
    member_models: Optional[List[shared.MemberModel]] = field(default=None)
    status_code: int = field(default=None)
    
