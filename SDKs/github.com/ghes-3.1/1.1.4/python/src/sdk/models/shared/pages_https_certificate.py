from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PagesHTTPSCertificateStateEnum(str, Enum):
    NEW = "new"
    AUTHORIZATION_CREATED = "authorization_created"
    AUTHORIZATION_PENDING = "authorization_pending"
    AUTHORIZED = "authorized"
    AUTHORIZATION_REVOKED = "authorization_revoked"
    ISSUED = "issued"
    UPLOADED = "uploaded"
    APPROVED = "approved"
    ERRORED = "errored"
    BAD_AUTHZ = "bad_authz"
    DESTROY_PENDING = "destroy_pending"
    DNS_CHANGED = "dns_changed"


@dataclass_json
@dataclass
class PagesHTTPSCertificate:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    domains: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    state: PagesHTTPSCertificateStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    expires_at: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
