from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import incidentrecordsource
from . import incidentrecordstatus_enum


@dataclass_json
@dataclass
class IncidentRecordSummary:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    impact: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impact' }})
    incident_record_source: incidentrecordsource.IncidentRecordSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentRecordSource' }})
    resolved_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: incidentrecordstatus_enum.IncidentRecordStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
