from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsSsmComplianceSummary:
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    compliant_critical_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantCriticalCount' }})
    compliant_high_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantHighCount' }})
    compliant_informational_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantInformationalCount' }})
    compliant_low_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantLowCount' }})
    compliant_medium_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantMediumCount' }})
    compliant_unspecified_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantUnspecifiedCount' }})
    execution_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionType' }})
    non_compliant_critical_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantCriticalCount' }})
    non_compliant_high_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantHighCount' }})
    non_compliant_informational_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantInformationalCount' }})
    non_compliant_low_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantLowCount' }})
    non_compliant_medium_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantMediumCount' }})
    non_compliant_unspecified_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantUnspecifiedCount' }})
    overall_severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverallSeverity' }})
    patch_baseline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchBaselineId' }})
    patch_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchGroup' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
