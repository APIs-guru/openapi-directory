from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compliancesummaryinfo


@dataclass_json
@dataclass
class ComplianceSummary:
    violation_summaries: Optional[List[compliancesummaryinfo.ComplianceSummaryInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationSummaries' }})
    
