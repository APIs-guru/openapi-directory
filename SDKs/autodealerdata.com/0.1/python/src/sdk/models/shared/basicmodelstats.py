from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BasicModelStats:
    average: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    median: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('median') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    p_variance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pVariance') }})
    std_dev: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stdDev') }})
    
