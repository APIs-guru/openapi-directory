from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EeCreateTokenResponse:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    expires_in: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresIn' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenType' }})
    
