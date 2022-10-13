from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import actiontype_enum
from . import handshakeparty
from . import handshakeresource
from . import handshakestate_enum


@dataclass_json
@dataclass
class Handshake:
    action: Optional[actiontype_enum.ActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    expiration_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    parties: Optional[List[handshakeparty.HandshakeParty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parties' }})
    requested_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resources: Optional[List[handshakeresource.HandshakeResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    state: Optional[handshakestate_enum.HandshakeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
