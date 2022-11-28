from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ScimDeleteUserFromOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScimDeleteUserFromOrgRequest:
    path_params: ScimDeleteUserFromOrgPathParams = field()
    

@dataclass
class ScimDeleteUserFromOrgResponse:
    content_type: str = field()
    status_code: int = field()
    scim_error: Optional[shared.ScimError] = field(default=None)
    
