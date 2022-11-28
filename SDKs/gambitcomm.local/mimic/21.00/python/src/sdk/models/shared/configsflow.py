from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigSflow:
    collector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collector') }})
    collectorport: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectorport') }})
    encoding_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding_type') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    flows_per_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flows_per_min') }})
    include_samples: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_samples') }})
    records_per_sample: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records_per_sample') }})
    samples_per_datagram: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samples_per_datagram') }})
    
