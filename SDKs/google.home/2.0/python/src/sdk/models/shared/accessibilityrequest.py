from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessibilityRequest:
    endpoint_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint_enabled') }})
    hotword_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotword_enabled') }})
    
