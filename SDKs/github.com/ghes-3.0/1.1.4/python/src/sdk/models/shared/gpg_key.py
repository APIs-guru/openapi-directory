from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GpgKeyEmails:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    

@dataclass_json
@dataclass
class GpgKeySubkeys:
    can_certify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_certify') }})
    can_encrypt_comms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_encrypt_comms') }})
    can_encrypt_storage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_encrypt_storage') }})
    can_sign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_sign') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    emails: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    primary_key_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_key_id') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    raw_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_key') }})
    subkeys: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subkeys') }})
    

@dataclass_json
@dataclass
class GpgKey:
    r"""GpgKey
    A unique encryption key
    """
    
    can_certify: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_certify') }})
    can_encrypt_comms: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_encrypt_comms') }})
    can_encrypt_storage: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_encrypt_storage') }})
    can_sign: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_sign') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    emails: List[GpgKeyEmails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    expires_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    primary_key_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_key_id') }})
    public_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    raw_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_key') }})
    subkeys: List[GpgKeySubkeys] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subkeys') }})
    
