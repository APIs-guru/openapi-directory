from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GpgKeyEmails:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    

@dataclass_json
@dataclass
class GpgKeySubkeys:
    can_certify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_certify' }})
    can_encrypt_comms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_encrypt_comms' }})
    can_encrypt_storage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_encrypt_storage' }})
    can_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_sign' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    emails: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key_id' }})
    primary_key_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_key_id' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    raw_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw_key' }})
    subkeys: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subkeys' }})
    

@dataclass_json
@dataclass
class GpgKey:
    can_certify: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_certify' }})
    can_encrypt_comms: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_encrypt_comms' }})
    can_encrypt_storage: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_encrypt_storage' }})
    can_sign: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_sign' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    emails: List[GpgKeyEmails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    expires_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key_id' }})
    primary_key_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_key_id' }})
    public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    raw_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw_key' }})
    subkeys: List[GpgKeySubkeys] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subkeys' }})
    
