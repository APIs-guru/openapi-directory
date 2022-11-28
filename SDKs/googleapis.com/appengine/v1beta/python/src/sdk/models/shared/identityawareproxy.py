from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentityAwareProxy:
    r"""IdentityAwareProxy
    Identity-Aware Proxy
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    oauth2_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2ClientId') }})
    oauth2_client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2ClientSecret') }})
    oauth2_client_secret_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2ClientSecretSha256') }})
    

@dataclass_json
@dataclass
class IdentityAwareProxyInput:
    r"""IdentityAwareProxyInput
    Identity-Aware Proxy
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    oauth2_client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2ClientId') }})
    oauth2_client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2ClientSecret') }})
    
