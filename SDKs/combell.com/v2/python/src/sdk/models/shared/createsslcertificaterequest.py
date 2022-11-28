from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSslCertificateRequest:
    additional_validation_attributes: Optional[List[AdditionalValidationAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_validation_attributes') }})
    certificate_type: Optional[SslCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_type') }})
    csr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csr') }})
    validation_level: Optional[SslCertificateValidationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation_level') }})
    
