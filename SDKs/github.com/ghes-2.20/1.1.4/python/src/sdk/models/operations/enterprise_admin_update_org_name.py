from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class EnterpriseAdminUpdateOrgNamePathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateOrgNameRequestBody:
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    

@dataclass
class EnterpriseAdminUpdateOrgNameRequest:
    path_params: EnterpriseAdminUpdateOrgNamePathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdateOrgNameRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateOrgName202ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class EnterpriseAdminUpdateOrgNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_update_org_name_202_application_json_object: Optional[EnterpriseAdminUpdateOrgName202ApplicationJSON] = field(default=None)
    
