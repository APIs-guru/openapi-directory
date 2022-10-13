from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachLoadBalancerTLSCertificateRequest:
    certificate_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    load_balancer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerName' }})
    
