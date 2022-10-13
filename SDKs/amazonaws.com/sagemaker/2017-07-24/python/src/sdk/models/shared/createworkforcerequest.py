from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cognitoconfig
from . import oidcconfig
from . import sourceipconfig
from . import tag


@dataclass_json
@dataclass
class CreateWorkforceRequest:
    cognito_config: Optional[cognitoconfig.CognitoConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CognitoConfig' }})
    oidc_config: Optional[oidcconfig.OidcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OidcConfig' }})
    source_ip_config: Optional[sourceipconfig.SourceIPConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIpConfig' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    workforce_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkforceName' }})
    
