from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthTokenRestrictions:
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTokenValidity' }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshTokenValidity' }})
    restriction_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictionEnabled' }})
    
