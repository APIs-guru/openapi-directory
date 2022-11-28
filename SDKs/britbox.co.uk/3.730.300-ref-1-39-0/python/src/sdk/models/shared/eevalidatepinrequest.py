from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EeValidatePinRequest:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    pin: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin') }})
    pin_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinReference') }})
    tracking_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingHeader') }})
    
