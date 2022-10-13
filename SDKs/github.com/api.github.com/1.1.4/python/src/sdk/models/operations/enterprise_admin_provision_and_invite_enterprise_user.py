from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails:
    primary: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName:
    family_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody:
    emails: List[EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    groups: Optional[List[EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    name: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    

@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequest:
    path_params: EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams = field(default=None)
    request: Optional[EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_enterprise_user: Optional[shared.ScimEnterpriseUser] = field(default=None)
    
