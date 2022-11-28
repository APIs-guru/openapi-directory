from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OidcConfig:
    r"""OidcConfig
    Use this parameter to configure your OIDC Identity Provider (IdP).
    """
    
    authorization_endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationEndpoint') }})
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSecret') }})
    issuer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    jwks_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JwksUri') }})
    logout_endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogoutEndpoint') }})
    token_endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenEndpoint') }})
    user_info_endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserInfoEndpoint') }})
    
