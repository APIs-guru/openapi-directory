from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RadiusConfigUpdateRequest:
    r"""RadiusConfigUpdateRequest
    Request model for updating a RADIUS configuration
    """
    
    failover_server: Optional[FailoverServer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverServer') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    otp_pin_first: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otpPinFirst') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    shared_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedSecret') }})
    
