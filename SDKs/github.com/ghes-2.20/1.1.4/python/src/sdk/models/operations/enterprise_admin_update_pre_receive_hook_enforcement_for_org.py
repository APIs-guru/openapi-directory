from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody:
    allow_downstream_configuration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_downstream_configuration') }})
    enforcement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement') }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest:
    path_params: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams = field()
    request: Optional[EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    org_pre_receive_hook: Optional[shared.OrgPreReceiveHook] = field(default=None)
    
