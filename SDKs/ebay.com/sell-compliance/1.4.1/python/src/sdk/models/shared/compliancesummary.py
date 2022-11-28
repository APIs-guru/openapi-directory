from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceSummary:
    r"""ComplianceSummary
    This type is the base type for the getListingViolationsSummary response. The violationSummaries container contains an array of policy violation counts for each unique eBay marketplace and compliance type violation.
    """
    
    violation_summaries: Optional[List[ComplianceSummaryInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationSummaries') }})
    
