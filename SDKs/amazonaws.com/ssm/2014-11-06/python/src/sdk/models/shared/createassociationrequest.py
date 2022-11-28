from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAssociationRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    apply_only_at_cron_interval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyOnlyAtCronInterval') }})
    association_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationName') }})
    automation_target_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationTargetParameterName') }})
    calendar_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CalendarNames') }})
    compliance_severity: Optional[AssociationComplianceSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSeverity') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DocumentVersion') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrency') }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxErrors') }})
    output_location: Optional[InstanceAssociationOutputLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputLocation') }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduleExpression') }})
    sync_compliance: Optional[AssociationSyncComplianceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SyncCompliance') }})
    target_locations: Optional[List[TargetLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetLocations') }})
    targets: Optional[List[Target]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    
