from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OidcConfigForResponse:
    authorization_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationEndpoint' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Issuer' }})
    jwks_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JwksUri' }})
    logout_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogoutEndpoint' }})
    token_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenEndpoint' }})
    user_info_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserInfoEndpoint' }})
    
