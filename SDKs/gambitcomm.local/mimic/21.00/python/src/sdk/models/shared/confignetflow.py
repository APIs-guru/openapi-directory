from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigNetflow:
    bundleflowsets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleflowsets') }})
    collector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collector') }})
    collectorport: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectorport') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    
