from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminCreateOrgRequestBody:
    admin: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile_name') }})
    

@dataclass
class EnterpriseAdminCreateOrgRequest:
    request: Optional[EnterpriseAdminCreateOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateOrgResponse:
    content_type: str = field()
    status_code: int = field()
    organization_simple: Optional[shared.OrganizationSimple] = field(default=None)
    
