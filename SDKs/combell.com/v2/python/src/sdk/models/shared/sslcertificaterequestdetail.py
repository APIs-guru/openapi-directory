from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SslCertificateRequestDetail:
    certificate_type: Optional[SslCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_type') }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_name') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    order_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_code') }})
    subject_alt_names: Optional[List[SslSubjectAltName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject_alt_names') }})
    validation_level: Optional[SslCertificateValidationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_level') }})
    validations: Optional[List[SslCertificateRequestValidation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validations') }})
    vendor: Optional[SslCertificateVendorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    
