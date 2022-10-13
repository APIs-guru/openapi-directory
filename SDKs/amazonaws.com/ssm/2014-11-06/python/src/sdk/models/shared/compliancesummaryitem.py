from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compliantsummary
from . import noncompliantsummary


@dataclass_json
@dataclass
class ComplianceSummaryItem:
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    compliant_summary: Optional[compliantsummary.CompliantSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantSummary' }})
    non_compliant_summary: Optional[noncompliantsummary.NonCompliantSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantSummary' }})
    
