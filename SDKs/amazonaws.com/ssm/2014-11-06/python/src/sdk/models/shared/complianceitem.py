from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import complianceexecutionsummary
from . import complianceseverity_enum
from . import compliancestatus_enum


@dataclass_json
@dataclass
class ComplianceItem:
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    execution_summary: Optional[complianceexecutionsummary.ComplianceExecutionSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionSummary' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    severity: Optional[complianceseverity_enum.ComplianceSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    status: Optional[compliancestatus_enum.ComplianceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
