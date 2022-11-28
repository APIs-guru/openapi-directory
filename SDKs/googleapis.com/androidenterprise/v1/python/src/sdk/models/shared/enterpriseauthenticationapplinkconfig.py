from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseAuthenticationAppLinkConfig:
    r"""EnterpriseAuthenticationAppLinkConfig
    An authentication URL configuration for the authenticator app of an identity provider.
    """
    
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
