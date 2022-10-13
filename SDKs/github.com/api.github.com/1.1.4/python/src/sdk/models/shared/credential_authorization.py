from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CredentialAuthorization:
    authorized_credential_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_credential_id' }})
    authorized_credential_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_credential_note' }})
    authorized_credential_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_credential_title' }})
    credential_accessed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential_accessed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credential_authorized_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential_authorized_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credential_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential_id' }})
    credential_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential_type' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    token_last_eight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_last_eight' }})
    
