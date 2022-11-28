from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoadBalancerTLSCertificateDomainValidationRecord:
    r"""LoadBalancerTLSCertificateDomainValidationRecord
    Describes the validation record of each domain name in the SSL/TLS certificate.
    """
    
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    validation_status: Optional[LoadBalancerTLSCertificateDomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationStatus') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
