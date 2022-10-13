from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Member:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    administrator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdministratorId' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    invited_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvitedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    master_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MasterId' }})
    member_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberStatus' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
