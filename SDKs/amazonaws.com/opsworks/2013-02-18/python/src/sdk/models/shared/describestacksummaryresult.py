from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import stacksummary


@dataclass_json
@dataclass
class DescribeStackSummaryResult:
    stack_summary: Optional[stacksummary.StackSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackSummary' }})
    
