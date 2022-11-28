from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RadiusConfig:
    r"""RadiusConfig
    RADIUS configuration
    """
    
    ip_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    otp_pin_first: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('otpPinFirst') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    shared_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedSecret') }})
    failover_server: Optional[FailoverServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverServer') }})
    
