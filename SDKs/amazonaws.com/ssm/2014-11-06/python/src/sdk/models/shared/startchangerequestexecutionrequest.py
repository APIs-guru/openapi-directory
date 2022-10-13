from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runbook
from . import tag


@dataclass_json
@dataclass
class StartChangeRequestExecutionRequest:
    change_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeDetails' }})
    change_request_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeRequestName' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    document_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentName' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentVersion' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    runbooks: List[runbook.Runbook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Runbooks' }})
    scheduled_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scheduled_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
