from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compliancesummaryitem


@dataclass_json
@dataclass
class ListComplianceSummariesResult:
    compliance_summary_items: Optional[List[compliancesummaryitem.ComplianceSummaryItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceSummaryItems' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
