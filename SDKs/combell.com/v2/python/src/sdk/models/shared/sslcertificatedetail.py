from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sslsubjectaltname
from . import sslcertificatetype_enum
from . import sslcertificatevalidationlevel_enum


@dataclass_json
@dataclass
class SslCertificateDetail:
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'common_name' }})
    expires_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_after', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sha1_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha1_fingerprint' }})
    subject_alt_names: Optional[List[sslsubjectaltname.SslSubjectAltName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject_alt_names' }})
    type: Optional[sslcertificatetype_enum.SslCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    validation_level: Optional[sslcertificatevalidationlevel_enum.SslCertificateValidationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation_level' }})
    
