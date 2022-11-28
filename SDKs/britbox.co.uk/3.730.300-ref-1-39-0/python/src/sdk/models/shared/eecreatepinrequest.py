from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EeCreatePinRequest:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    msisdn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('msisdn') }})
    tracking_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingHeader') }})
    
