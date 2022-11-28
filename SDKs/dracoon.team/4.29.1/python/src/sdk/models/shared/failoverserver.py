from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FailoverServer:
    r"""FailoverServer
    Failover server information
    """
    
    failover_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverEnabled') }})
    failover_ip_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverIpAddress') }})
    failover_port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverPort') }})
    
