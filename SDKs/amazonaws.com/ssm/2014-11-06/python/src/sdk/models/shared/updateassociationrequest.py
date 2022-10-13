from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import associationcomplianceseverity_enum
from . import instanceassociationoutputlocation
from . import associationsynccompliance_enum
from . import targetlocation
from . import target


@dataclass_json
@dataclass
class UpdateAssociationRequest:
    apply_only_at_cron_interval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplyOnlyAtCronInterval' }})
    association_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    association_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationName' }})
    association_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationVersion' }})
    automation_target_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationTargetParameterName' }})
    calendar_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalendarNames' }})
    compliance_severity: Optional[associationcomplianceseverity_enum.AssociationComplianceSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceSeverity' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxErrors' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output_location: Optional[instanceassociationoutputlocation.InstanceAssociationOutputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputLocation' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleExpression' }})
    sync_compliance: Optional[associationsynccompliance_enum.AssociationSyncComplianceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncCompliance' }})
    target_locations: Optional[List[targetlocation.TargetLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLocations' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
