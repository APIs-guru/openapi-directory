from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loggingconfiguration


@dataclass_json
@dataclass
class DescribeLoggingConfigurationResponse:
    firewall_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirewallArn' }})
    logging_configuration: Optional[loggingconfiguration.LoggingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoggingConfiguration' }})
    
