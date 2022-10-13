from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awscertificatemanagercertificateresourcerecord


@dataclass_json
@dataclass
class AwsCertificateManagerCertificateDomainValidationOption:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    resource_record: Optional[awscertificatemanagercertificateresourcerecord.AwsCertificateManagerCertificateResourceRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceRecord' }})
    validation_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationDomain' }})
    validation_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationEmails' }})
    validation_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationMethod' }})
    validation_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationStatus' }})
    
