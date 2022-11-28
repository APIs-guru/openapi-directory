from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCertificateManagerCertificateDomainValidationOption:
    r"""AwsCertificateManagerCertificateDomainValidationOption
    <p>Contains information about one of the following:</p> <ul> <li> <p>The initial validation of each domain name that occurs as a result of the <code>RequestCertificate</code> request</p> </li> <li> <p>The validation of each domain name in the certificate, as it pertains to Certificate Manager managed renewal</p> </li> </ul>
    """
    
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    resource_record: Optional[AwsCertificateManagerCertificateResourceRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRecord') }})
    validation_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationDomain') }})
    validation_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationEmails') }})
    validation_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationMethod') }})
    validation_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationStatus') }})
    
