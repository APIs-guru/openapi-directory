from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatisticSet:
    r"""StatisticSet
    Internal only API.
    """
    
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Maximum') }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Minimum') }})
    sample_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleCount') }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sum') }})
    
