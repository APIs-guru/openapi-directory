from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceComplianceSummaryItem:
    r"""ResourceComplianceSummaryItem
    Compliance summary information for a specific resource. 
    """
    
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    compliant_summary: Optional[CompliantSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantSummary') }})
    execution_summary: Optional[ComplianceExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionSummary') }})
    non_compliant_summary: Optional[NonCompliantSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantSummary') }})
    overall_severity: Optional[ComplianceSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallSeverity') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    status: Optional[ComplianceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
