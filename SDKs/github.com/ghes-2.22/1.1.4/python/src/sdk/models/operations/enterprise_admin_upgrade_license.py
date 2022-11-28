from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseAdminUpgradeLicenseRequestBody:
    license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    

@dataclass
class EnterpriseAdminUpgradeLicenseRequest:
    request: Optional[EnterpriseAdminUpgradeLicenseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpgradeLicenseResponse:
    content_type: str = field()
    status_code: int = field()
    
