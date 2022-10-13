from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnterpriseAdminSetSettingsRequestBody:
    settings: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass
class EnterpriseAdminSetSettingsRequest:
    request: Optional[EnterpriseAdminSetSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
