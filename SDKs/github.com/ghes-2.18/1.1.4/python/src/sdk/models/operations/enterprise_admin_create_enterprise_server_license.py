from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseAdminCreateEnterpriseServerLicenseRequestBody:
    license: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass
class EnterpriseAdminCreateEnterpriseServerLicenseRequest:
    request: Optional[EnterpriseAdminCreateEnterpriseServerLicenseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateEnterpriseServerLicenseResponse:
    content_type: str = field()
    status_code: int = field()
    
