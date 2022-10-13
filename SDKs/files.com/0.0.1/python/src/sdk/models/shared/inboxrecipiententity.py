from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InboxRecipientEntity:
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    recipient: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    sent_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sent_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
