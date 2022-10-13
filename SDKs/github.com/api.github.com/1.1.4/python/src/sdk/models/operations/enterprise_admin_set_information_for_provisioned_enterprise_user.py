from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails:
    primary: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName:
    family_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody:
    emails: List[EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    groups: Optional[List[EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    name: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    

@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest:
    path_params: EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams = field(default=None)
    request: Optional[EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_enterprise_user: Optional[shared.ScimEnterpriseUser] = field(default=None)
    
