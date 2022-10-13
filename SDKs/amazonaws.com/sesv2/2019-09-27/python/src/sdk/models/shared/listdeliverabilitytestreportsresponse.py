from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deliverabilitytestreport


@dataclass_json
@dataclass
class ListDeliverabilityTestReportsResponse:
    deliverability_test_reports: List[deliverabilitytestreport.DeliverabilityTestReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliverabilityTestReports' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
