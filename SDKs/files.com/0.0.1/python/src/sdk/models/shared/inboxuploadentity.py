from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import inboxregistrationentity


@dataclass_json
@dataclass
class InboxUploadEntity:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inbox_registration: Optional[inboxregistrationentity.InboxRegistrationEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbox_registration' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
