from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPermissionGroupsPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPermissionGroupsRequest:
    path_params: GetPermissionGroupsPathParams = field(default=None)
    

@dataclass
class GetPermissionGroupsResponse:
    content_type: str = field(default=None)
    permission_group_models: Optional[List[shared.PermissionGroupModel]] = field(default=None)
    status_code: int = field(default=None)
    
