from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OidcConfig:
    authorization_endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationEndpoint' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientSecret' }})
    issuer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Issuer' }})
    jwks_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JwksUri' }})
    logout_endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogoutEndpoint' }})
    token_endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenEndpoint' }})
    user_info_endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserInfoEndpoint' }})
    
