from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SummarizedCounter:
    r"""SummarizedCounter
    The counter that describes a DDoS attack.
    """
    
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Average') }})
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Max') }})
    n: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('N') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sum') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
