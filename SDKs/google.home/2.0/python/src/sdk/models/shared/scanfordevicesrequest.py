from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScanfordevicesRequest:
    clear_results: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clear_results') }})
    enable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
