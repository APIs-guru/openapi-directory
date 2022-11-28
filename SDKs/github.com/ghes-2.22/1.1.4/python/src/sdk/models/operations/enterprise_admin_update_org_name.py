from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class EnterpriseAdminUpdateOrgNamePathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateOrgNameRequestBody:
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateOrgName202ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class EnterpriseAdminUpdateOrgNameRequest:
    path_params: EnterpriseAdminUpdateOrgNamePathParams = field()
    request: Optional[EnterpriseAdminUpdateOrgNameRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateOrgNameResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_admin_update_org_name_202_application_json_object: Optional[EnterpriseAdminUpdateOrgName202ApplicationJSON] = field(default=None)
    
