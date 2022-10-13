from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

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
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domains: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: PagesHTTPSCertificateStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
