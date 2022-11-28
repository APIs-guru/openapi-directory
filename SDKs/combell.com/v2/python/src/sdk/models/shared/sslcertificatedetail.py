from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SslCertificateDetail:
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_name') }})
    expires_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_after'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sha1_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1_fingerprint') }})
    subject_alt_names: Optional[List[SslSubjectAltName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject_alt_names') }})
    type: Optional[SslCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    validation_level: Optional[SslCertificateValidationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_level') }})
    
