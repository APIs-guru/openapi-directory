from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccessTokenGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"


@dataclass_json
@dataclass
class AccessToken:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_secret' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    code_verifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code_verifier' }})
    grant_type: AccessTokenGrantTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_type' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_uri' }})
    
