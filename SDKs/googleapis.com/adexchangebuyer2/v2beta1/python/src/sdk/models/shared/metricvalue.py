from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricValue:
    r"""MetricValue
    A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
    """
    
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    variance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variance') }})
    
