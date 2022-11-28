from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttachLoadBalancerTLSCertificateRequest:
    certificate_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateName') }})
    load_balancer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    
