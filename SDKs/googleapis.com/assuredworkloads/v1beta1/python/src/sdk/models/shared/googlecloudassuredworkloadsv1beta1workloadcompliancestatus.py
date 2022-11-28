from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus:
    r"""GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus
    Represents the Compliance Status of this workload
    """
    
    acknowledged_violation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgedViolationCount') }})
    active_violation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeViolationCount') }})
    
