from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TelephonyInfo:
    r"""TelephonyInfo
    Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
    """
    
    carrier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierName') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    
