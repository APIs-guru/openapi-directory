from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EeCreatePinResponse:
    pin_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinReference') }})
    tracking_header: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingHeader') }})
    
