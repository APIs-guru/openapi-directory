from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import complianceseverity_enum
from . import compliancestatus_enum


@dataclass_json
@dataclass
class ComplianceItemEntry:
    details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    severity: complianceseverity_enum.ComplianceSeverityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    status: compliancestatus_enum.ComplianceStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
