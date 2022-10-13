from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sessionmanageroutputurl
from . import sessionstatus_enum


@dataclass_json
@dataclass
class Session:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    document_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DocumentName' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    output_url: Optional[sessionmanageroutputurl.SessionManagerOutputURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputUrl' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionId' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[sessionstatus_enum.SessionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
