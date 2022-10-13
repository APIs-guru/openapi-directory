from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EulaAcceptance:
    accepted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    accepted_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptedBy' }})
    acceptee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accepteeId' }})
    eula_acceptance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eulaAcceptanceId' }})
    eula_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eulaId' }})
    
