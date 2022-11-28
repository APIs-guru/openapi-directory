from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceChange:
    r"""ServiceChange
    A complex type that contains changes to an existing service.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dns_config: Optional[DNSConfigChange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DnsConfig') }})
    health_check_config: Optional[HealthCheckConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckConfig') }})
    
