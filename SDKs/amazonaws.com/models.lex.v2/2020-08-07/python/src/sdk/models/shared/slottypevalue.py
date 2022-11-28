from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlotTypeValue:
    r"""SlotTypeValue
    Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take.
    """
    
    sample_value: Optional[SampleValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleValue') }})
    synonyms: Optional[List[SampleValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synonyms') }})
    
