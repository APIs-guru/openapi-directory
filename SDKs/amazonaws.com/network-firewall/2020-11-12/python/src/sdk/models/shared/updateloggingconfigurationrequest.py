from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loggingconfiguration


@dataclass_json
@dataclass
class UpdateLoggingConfigurationRequest:
    firewall_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallArn' }})
    firewall_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallName' }})
    logging_configuration: Optional[loggingconfiguration.LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingConfiguration' }})
    
