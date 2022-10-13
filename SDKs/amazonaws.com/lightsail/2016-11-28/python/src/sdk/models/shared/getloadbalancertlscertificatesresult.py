from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loadbalancertlscertificate


@dataclass_json
@dataclass
class GetLoadBalancerTLSCertificatesResult:
    tls_certificates: Optional[List[loadbalancertlscertificate.LoadBalancerTLSCertificate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tlsCertificates' }})
    
