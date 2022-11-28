from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Example11:
    app_device_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_device_id') }})
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    signed_data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signed_data') }})
    
