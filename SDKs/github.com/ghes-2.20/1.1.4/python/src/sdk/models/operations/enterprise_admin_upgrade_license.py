from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseAdminUpgradeLicenseRequestBody:
    license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    

@dataclass
class EnterpriseAdminUpgradeLicenseRequest:
    request: Optional[EnterpriseAdminUpgradeLicenseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpgradeLicenseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
