from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loadbalancertlscertificatedomainstatus_enum


@dataclass_json
@dataclass
class LoadBalancerTLSCertificateDomainValidationOption:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    validation_status: Optional[loadbalancertlscertificatedomainstatus_enum.LoadBalancerTLSCertificateDomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationStatus' }})
    
