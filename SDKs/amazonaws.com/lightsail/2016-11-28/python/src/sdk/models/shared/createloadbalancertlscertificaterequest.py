from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLoadBalancerTLSCertificateRequest:
    certificate_domain_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateDomainName') }})
    certificate_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    load_balancer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    certificate_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAlternativeNames') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
