from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SystemUpdateInfoUpdateStatusEnum(str, Enum):
    UPDATE_STATUS_UNKNOWN = "UPDATE_STATUS_UNKNOWN"
    UP_TO_DATE = "UP_TO_DATE"
    UNKNOWN_UPDATE_AVAILABLE = "UNKNOWN_UPDATE_AVAILABLE"
    SECURITY_UPDATE_AVAILABLE = "SECURITY_UPDATE_AVAILABLE"
    OS_UPDATE_AVAILABLE = "OS_UPDATE_AVAILABLE"


@dataclass_json
@dataclass
class SystemUpdateInfo:
    r"""SystemUpdateInfo
    Information about a potential pending system update.
    """
    
    update_received_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateReceivedTime') }})
    update_status: Optional[SystemUpdateInfoUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateStatus') }})
    
