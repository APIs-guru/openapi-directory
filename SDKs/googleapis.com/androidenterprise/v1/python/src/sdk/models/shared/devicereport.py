from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceReport:
    r"""DeviceReport
    Device report updated with the latest app states for managed apps on the device.
    """
    
    app_state: Optional[List[AppState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appState') }})
    last_updated_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedTimestampMillis') }})
    
