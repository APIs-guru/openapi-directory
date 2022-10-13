from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import oidcconfig
from . import sourceipconfig


@dataclass_json
@dataclass
class UpdateWorkforceRequest:
    oidc_config: Optional[oidcconfig.OidcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OidcConfig' }})
    source_ip_config: Optional[sourceipconfig.SourceIPConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceIpConfig' }})
    workforce_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkforceName' }})
    
