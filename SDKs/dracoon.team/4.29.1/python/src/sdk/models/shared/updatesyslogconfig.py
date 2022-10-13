from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UpdateSyslogConfigProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclass
class UpdateSyslogConfig:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    log_ip_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logIpEnabled' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    protocol: Optional[UpdateSyslogConfigProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    
