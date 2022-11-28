from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoadBalancerTLSCertificateRenewalSummary:
    r"""LoadBalancerTLSCertificateRenewalSummary
    <p>Contains information about the status of Lightsail's managed renewal for the certificate.</p> <p>The renewal status of the certificate.</p> <p>The following renewal status are possible:</p> <ul> <li> <p> <b> <code>PendingAutoRenewal</code> </b> - Lightsail is attempting to automatically validate the domain names in the certificate. No further action is required. </p> </li> <li> <p> <b> <code>PendingValidation</code> </b> - Lightsail couldn't automatically validate one or more domain names in the certificate. You must take action to validate these domain names or the certificate won't be renewed. If you used DNS validation, check to make sure your certificate's domain validation records exist in your domain's DNS, and that your certificate remains in use.</p> </li> <li> <p> <b> <code>Success</code> </b> - All domain names in the certificate are validated, and Lightsail renewed the certificate. No further action is required. </p> </li> <li> <p> <b> <code>Failed</code> </b> - One or more domain names were not validated before the certificate expired, and Lightsail did not renew the certificate. You can request a new certificate using the <code>CreateCertificate</code> action.</p> </li> </ul>
    """
    
    domain_validation_options: Optional[List[LoadBalancerTLSCertificateDomainValidationOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainValidationOptions') }})
    renewal_status: Optional[LoadBalancerTLSCertificateRenewalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalStatus') }})
    
