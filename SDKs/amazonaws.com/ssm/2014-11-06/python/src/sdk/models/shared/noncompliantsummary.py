from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NonCompliantSummary:
    r"""NonCompliantSummary
    A summary of resources that aren't compliant. The summary is organized according to resource type.
    """
    
    non_compliant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantCount') }})
    severity_summary: Optional[SeveritySummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SeveritySummary') }})
    
