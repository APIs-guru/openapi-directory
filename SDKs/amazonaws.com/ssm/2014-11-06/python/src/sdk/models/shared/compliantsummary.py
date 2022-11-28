from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompliantSummary:
    r"""CompliantSummary
    A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.
    """
    
    compliant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantCount') }})
    severity_summary: Optional[SeveritySummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SeveritySummary') }})
    
