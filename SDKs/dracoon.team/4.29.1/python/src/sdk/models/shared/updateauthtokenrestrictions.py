from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateAuthTokenRestrictions:
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTokenValidity' }})
    overwrite_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overwriteEnabled' }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshTokenValidity' }})
    
