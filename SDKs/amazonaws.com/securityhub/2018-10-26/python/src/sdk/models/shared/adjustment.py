from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Adjustment:
    r"""Adjustment
    An adjustment to the CVSS metric.
    """
    
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metric') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    
