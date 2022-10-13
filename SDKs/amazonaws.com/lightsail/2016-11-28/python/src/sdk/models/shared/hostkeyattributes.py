from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HostKeyAttributes:
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    fingerprint_sha1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprintSHA1' }})
    fingerprint_sha256: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprintSHA256' }})
    not_valid_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notValidAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_valid_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notValidBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    witnessed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'witnessedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
