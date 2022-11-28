from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RadiusConfigCreateRequest:
    r"""RadiusConfigCreateRequest
    Request model for creating a RADIUS configuration
    """
    
    ip_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    shared_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedSecret') }})
    failover_server: Optional[FailoverServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverServer') }})
    otp_pin_first: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otpPinFirst') }})
    
