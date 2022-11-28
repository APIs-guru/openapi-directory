from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteLoadBalancerTLSCertificateRequest:
    certificate_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    load_balancer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    
