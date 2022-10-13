from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Invitation:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvitationId' }})
    invited_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvitedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    member_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberStatus' }})
    
