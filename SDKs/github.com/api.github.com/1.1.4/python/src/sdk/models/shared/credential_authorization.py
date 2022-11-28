from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CredentialAuthorization:
    r"""CredentialAuthorization
    Credential Authorization
    """
    
    credential_authorized_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential_authorized_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    credential_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential_id') }})
    credential_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential_type') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    authorized_credential_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_credential_id') }})
    authorized_credential_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_credential_note') }})
    authorized_credential_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_credential_title') }})
    credential_accessed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential_accessed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    token_last_eight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_last_eight') }})
    
