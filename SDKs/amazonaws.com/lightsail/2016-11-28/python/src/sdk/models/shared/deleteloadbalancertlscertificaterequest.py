from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteLoadBalancerTLSCertificateRequest:
    certificate_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    load_balancer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerName' }})
    
