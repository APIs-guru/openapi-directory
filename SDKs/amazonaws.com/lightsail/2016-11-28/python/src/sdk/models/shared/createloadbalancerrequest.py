from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ipaddresstype_enum
from . import tag


@dataclass_json
@dataclass
class CreateLoadBalancerRequest:
    certificate_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateAlternativeNames' }})
    certificate_domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateDomainName' }})
    certificate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    health_check_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheckPath' }})
    instance_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instancePort' }})
    ip_address_type: Optional[ipaddresstype_enum.IPAddressTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressType' }})
    load_balancer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
