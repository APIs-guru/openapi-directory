from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import associationcomplianceseverity_enum
from . import instanceassociationoutputlocation
from . import associationoverview
from . import associationstatus
from . import associationsynccompliance_enum
from . import targetlocation
from . import target


@dataclass_json
@dataclass
class AssociationDescription:
    apply_only_at_cron_interval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplyOnlyAtCronInterval' }})
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    association_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationName' }})
    association_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationVersion' }})
    automation_target_parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationTargetParameterName' }})
    calendar_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CalendarNames' }})
    compliance_severity: Optional[associationcomplianceseverity_enum.AssociationComplianceSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceSeverity' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    last_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_successful_execution_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSuccessfulExecutionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_association_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateAssociationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_concurrency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrency' }})
    max_errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxErrors' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output_location: Optional[instanceassociationoutputlocation.InstanceAssociationOutputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputLocation' }})
    overview: Optional[associationoverview.AssociationOverview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overview' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleExpression' }})
    status: Optional[associationstatus.AssociationStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    sync_compliance: Optional[associationsynccompliance_enum.AssociationSyncComplianceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncCompliance' }})
    target_locations: Optional[List[targetlocation.TargetLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetLocations' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
