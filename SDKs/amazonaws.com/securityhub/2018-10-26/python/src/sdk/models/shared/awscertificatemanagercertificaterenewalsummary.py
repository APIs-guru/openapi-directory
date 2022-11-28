from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCertificateManagerCertificateRenewalSummary:
    r"""AwsCertificateManagerCertificateRenewalSummary
    Contains information about the Certificate Manager managed renewal for an <code>AMAZON_ISSUED</code> certificate.
    """
    
    domain_validation_options: Optional[List[AwsCertificateManagerCertificateDomainValidationOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainValidationOptions') }})
    renewal_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalStatus') }})
    renewal_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalStatusReason') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt') }})
    
