from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetEqualizerValuesRequest:
    high_shelf: HighShelf1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('high_shelf') }})
    low_shelf: LowShelf1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('low_shelf') }})
    
