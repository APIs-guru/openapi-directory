from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import relationshipstatus_enum


@dataclass_json
@dataclass
class Invitation:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitationId' }})
    invited_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    relationship_status: Optional[relationshipstatus_enum.RelationshipStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipStatus' }})
    
