from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseAdminSetSettingsRequestBody:
    settings: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass
class EnterpriseAdminSetSettingsRequest:
    request: Optional[EnterpriseAdminSetSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    
