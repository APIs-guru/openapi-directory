from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IncidentRecordSummary:
    r"""IncidentRecordSummary
    Details describing an incident record.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    creation_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    impact: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact') }})
    incident_record_source: IncidentRecordSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordSource') }})
    status: IncidentRecordStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    resolved_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
