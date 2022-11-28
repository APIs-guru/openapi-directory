from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCertificatesRequest:
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    certificate_statuses: Optional[List[CertificateStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateStatuses') }})
    include_certificate_details: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeCertificateDetails') }})
    
