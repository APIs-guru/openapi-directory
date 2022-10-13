from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus:
    acknowledged_violation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgedViolationCount' }})
    active_violation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeViolationCount' }})
    
