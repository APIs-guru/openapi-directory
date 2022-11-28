from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsSsmComplianceSummary:
    r"""AwsSsmComplianceSummary
    Provides the details about the compliance status for a patch.
    """
    
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    compliant_critical_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantCriticalCount') }})
    compliant_high_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantHighCount') }})
    compliant_informational_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantInformationalCount') }})
    compliant_low_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantLowCount') }})
    compliant_medium_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantMediumCount') }})
    compliant_unspecified_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompliantUnspecifiedCount') }})
    execution_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionType') }})
    non_compliant_critical_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantCriticalCount') }})
    non_compliant_high_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantHighCount') }})
    non_compliant_informational_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantInformationalCount') }})
    non_compliant_low_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantLowCount') }})
    non_compliant_medium_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantMediumCount') }})
    non_compliant_unspecified_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonCompliantUnspecifiedCount') }})
    overall_severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverallSeverity') }})
    patch_baseline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchBaselineId') }})
    patch_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchGroup') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
