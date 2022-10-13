from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterUsageResult:
    public_key_rotation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKeyRotationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Signature' }})
    
