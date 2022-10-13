from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import failoverserver


@dataclass_json
@dataclass
class RadiusConfigCreateRequest:
    failover_server: Optional[failoverserver.FailoverServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failoverServer' }})
    ip_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    otp_pin_first: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otpPinFirst' }})
    port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    shared_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedSecret' }})
    
