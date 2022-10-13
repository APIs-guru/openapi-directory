from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcecompliancesummaryitem


@dataclass_json
@dataclass
class ListResourceComplianceSummariesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_compliance_summary_items: Optional[List[resourcecompliancesummaryitem.ResourceComplianceSummaryItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceComplianceSummaryItems' }})
    
