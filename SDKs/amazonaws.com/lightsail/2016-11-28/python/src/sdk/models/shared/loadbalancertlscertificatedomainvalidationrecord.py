from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loadbalancertlscertificatedomainstatus_enum


@dataclass_json
@dataclass
class LoadBalancerTLSCertificateDomainValidationRecord:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    validation_status: Optional[loadbalancertlscertificatedomainstatus_enum.LoadBalancerTLSCertificateDomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationStatus' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
