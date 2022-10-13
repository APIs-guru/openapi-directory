from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compliantsummary
from . import complianceexecutionsummary
from . import noncompliantsummary
from . import complianceseverity_enum
from . import compliancestatus_enum


@dataclass_json
@dataclass
class ResourceComplianceSummaryItem:
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    compliant_summary: Optional[compliantsummary.CompliantSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantSummary' }})
    execution_summary: Optional[complianceexecutionsummary.ComplianceExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionSummary' }})
    non_compliant_summary: Optional[noncompliantsummary.NonCompliantSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantSummary' }})
    overall_severity: Optional[complianceseverity_enum.ComplianceSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverallSeverity' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    status: Optional[compliancestatus_enum.ComplianceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
