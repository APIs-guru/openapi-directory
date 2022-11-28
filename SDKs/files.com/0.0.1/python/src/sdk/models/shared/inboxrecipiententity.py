from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InboxRecipientEntity:
    r"""InboxRecipientEntity
    List Inbox Recipients
    """
    
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    recipient: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    sent_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sent_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
