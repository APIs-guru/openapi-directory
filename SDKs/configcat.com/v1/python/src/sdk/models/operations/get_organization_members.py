from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOrganizationMembersPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationMembersRequest:
    path_params: GetOrganizationMembersPathParams = field()
    

@dataclass
class GetOrganizationMembersResponse:
    content_type: str = field()
    status_code: int = field()
    user_models: Optional[List[shared.UserModel]] = field(default=None)
    
