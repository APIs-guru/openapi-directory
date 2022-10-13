from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import loadbalancertlscertificatedomainvalidationoption
from . import loadbalancertlscertificaterenewalstatus_enum


@dataclass_json
@dataclass
class LoadBalancerTLSCertificateRenewalSummary:
    domain_validation_options: Optional[List[loadbalancertlscertificatedomainvalidationoption.LoadBalancerTLSCertificateDomainValidationOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainValidationOptions' }})
    renewal_status: Optional[loadbalancertlscertificaterenewalstatus_enum.LoadBalancerTLSCertificateRenewalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalStatus' }})
    
