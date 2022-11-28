from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OptIn1:
    opencast: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opencast') }})
    preview_channel: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_channel') }})
    remote_ducking: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_ducking') }})
    stats: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
