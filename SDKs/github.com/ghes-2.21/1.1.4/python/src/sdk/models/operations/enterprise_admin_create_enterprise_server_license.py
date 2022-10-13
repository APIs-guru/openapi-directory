from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseAdminCreateEnterpriseServerLicenseRequestBody:
    license: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    settings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass
class EnterpriseAdminCreateEnterpriseServerLicenseRequest:
    request: Optional[EnterpriseAdminCreateEnterpriseServerLicenseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateEnterpriseServerLicenseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
