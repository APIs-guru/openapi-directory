from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsElbLoadBalancerListener:
    instance_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstancePort' }})
    instance_protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceProtocol' }})
    load_balancer_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoadBalancerPort' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    ssl_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SslCertificateId' }})
    
