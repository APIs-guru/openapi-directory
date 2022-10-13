from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOrganizationMembersPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationMembersRequest:
    path_params: GetOrganizationMembersPathParams = field(default=None)
    

@dataclass
class GetOrganizationMembersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_models: Optional[List[shared.UserModel]] = field(default=None)
    
