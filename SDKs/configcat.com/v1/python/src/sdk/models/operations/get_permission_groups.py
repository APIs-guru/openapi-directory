from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPermissionGroupsPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPermissionGroupsRequest:
    path_params: GetPermissionGroupsPathParams = field()
    

@dataclass
class GetPermissionGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    permission_group_models: Optional[List[shared.PermissionGroupModel]] = field(default=None)
    
