from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import relationshipstatus_enum


@dataclass_json
@dataclass
class Member:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    administrator_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administratorAccountId' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    invited_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    master_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterAccountId' }})
    relationship_status: Optional[relationshipstatus_enum.RelationshipStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipStatus' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
