from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody:
    operations: List[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operations' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    

@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserRequest:
    path_params: EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateAttributeForEnterpriseUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_enterprise_user: Optional[shared.ScimEnterpriseUser] = field(default=None)
    
