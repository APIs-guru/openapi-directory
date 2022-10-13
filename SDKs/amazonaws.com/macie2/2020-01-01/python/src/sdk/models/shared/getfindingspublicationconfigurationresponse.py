from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import securityhubconfiguration


@dataclass_json
@dataclass
class GetFindingsPublicationConfigurationResponse:
    security_hub_configuration: Optional[securityhubconfiguration.SecurityHubConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityHubConfiguration' }})
    
