from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awscertificatemanagercertificatedomainvalidationoption


@dataclass_json
@dataclass
class AwsCertificateManagerCertificateRenewalSummary:
    domain_validation_options: Optional[List[awscertificatemanagercertificatedomainvalidationoption.AwsCertificateManagerCertificateDomainValidationOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainValidationOptions' }})
    renewal_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RenewalStatus' }})
    renewal_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RenewalStatusReason' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedAt' }})
    
