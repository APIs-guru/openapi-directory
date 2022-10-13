from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateLoadBalancerTLSCertificateRequest:
    certificate_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateAlternativeNames' }})
    certificate_domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateDomainName' }})
    certificate_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateName' }})
    load_balancer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
