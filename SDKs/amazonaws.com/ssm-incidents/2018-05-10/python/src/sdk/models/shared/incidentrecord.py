from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IncidentRecord:
    r"""IncidentRecord
    The record of the incident that's created when an incident occurs.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dedupe_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dedupeString') }})
    impact: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact') }})
    incident_record_source: IncidentRecordSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordSource') }})
    last_modified_by: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedBy') }})
    last_modified_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: IncidentRecordStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    automation_executions: Optional[List[AutomationExecution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automationExecutions') }})
    chat_channel: Optional[ChatChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chatChannel') }})
    notification_targets: Optional[List[NotificationTargetItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTargets') }})
    resolved_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
