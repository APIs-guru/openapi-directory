from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCertificateManagerCertificateDetails:
    r"""AwsCertificateManagerCertificateDetails
    Provides details about an Certificate Manager certificate.
    """
    
    certificate_authority_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    domain_validation_options: Optional[List[AwsCertificateManagerCertificateDomainValidationOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainValidationOptions') }})
    extended_key_usages: Optional[List[AwsCertificateManagerCertificateExtendedKeyUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsages') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    imported_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportedAt') }})
    in_use_by: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InUseBy') }})
    issued_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedAt') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    key_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyAlgorithm') }})
    key_usages: Optional[List[AwsCertificateManagerCertificateKeyUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsages') }})
    not_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotAfter') }})
    not_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotBefore') }})
    options: Optional[AwsCertificateManagerCertificateOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    renewal_eligibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalEligibility') }})
    renewal_summary: Optional[AwsCertificateManagerCertificateRenewalSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalSummary') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Serial') }})
    signature_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignatureAlgorithm') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubjectAlternativeNames') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
