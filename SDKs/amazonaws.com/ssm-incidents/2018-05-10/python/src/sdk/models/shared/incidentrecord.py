from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import automationexecution
from . import chatchannel
from . import incidentrecordsource
from . import notificationtargetitem
from . import incidentrecordstatus_enum


@dataclass_json
@dataclass
class IncidentRecord:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    automation_executions: Optional[List[automationexecution.AutomationExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automationExecutions' }})
    chat_channel: Optional[chatchannel.ChatChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chatChannel' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dedupe_string: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dedupeString' }})
    impact: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impact' }})
    incident_record_source: incidentrecordsource.IncidentRecordSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentRecordSource' }})
    last_modified_by: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedBy' }})
    last_modified_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notification_targets: Optional[List[notificationtargetitem.NotificationTargetItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationTargets' }})
    resolved_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: incidentrecordstatus_enum.IncidentRecordStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
