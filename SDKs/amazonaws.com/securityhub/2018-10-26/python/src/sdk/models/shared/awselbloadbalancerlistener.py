from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElbLoadBalancerListener:
    r"""AwsElbLoadBalancerListener
    Information about a load balancer listener.
    """
    
    instance_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancePort') }})
    instance_protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceProtocol') }})
    load_balancer_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadBalancerPort') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    ssl_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SslCertificateId') }})
    
