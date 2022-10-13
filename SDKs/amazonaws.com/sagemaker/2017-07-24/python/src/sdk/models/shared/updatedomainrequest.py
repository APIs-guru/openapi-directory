from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import usersettings


@dataclass_json
@dataclass
class UpdateDomainRequest:
    default_user_settings: Optional[usersettings.UserSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultUserSettings' }})
    domain_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    
