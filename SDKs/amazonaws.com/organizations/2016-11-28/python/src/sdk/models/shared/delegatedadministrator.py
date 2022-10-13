from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accountjoinedmethod_enum
from . import accountstatus_enum


@dataclass_json
@dataclass
class DelegatedAdministrator:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    delegation_enabled_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DelegationEnabledDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    joined_method: Optional[accountjoinedmethod_enum.AccountJoinedMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JoinedMethod' }})
    joined_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JoinedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[accountstatus_enum.AccountStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
