from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceSummaryItem:
    r"""ComplianceSummaryItem
    A summary of compliance information by compliance type.
    """
    
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    compliant_summary: Optional[CompliantSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantSummary') }})
    non_compliant_summary: Optional[NonCompliantSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantSummary') }})
    
