from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterClientResponse:
    authorization_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationEndpoint' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_id_issued_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientIdIssuedAt' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    client_secret_expires_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecretExpiresAt' }})
    token_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenEndpoint' }})
    
