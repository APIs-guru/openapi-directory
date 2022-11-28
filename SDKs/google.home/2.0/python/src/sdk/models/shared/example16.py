from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Example16:
    bytes_received: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytes_received') }})
    response_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_code') }})
    time_for_data_fetch: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_for_data_fetch') }})
    time_for_http_response: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_for_http_response') }})
    
