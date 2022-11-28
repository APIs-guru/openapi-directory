from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SslCertificateRequest:
    certificate_type: Optional[SslCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_type') }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_name') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    order_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_code') }})
    validation_level: Optional[SslCertificateValidationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_level') }})
    vendor: Optional[SslCertificateVendorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    
