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
class LoadBalancerTLSCertificate:
    r"""LoadBalancerTLSCertificate
    <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    domain_validation_records: Optional[List[LoadBalancerTLSCertificateDomainValidationRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainValidationRecords') }})
    failure_reason: Optional[LoadBalancerTLSCertificateFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    is_attached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAttached') }})
    issued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    key_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyAlgorithm') }})
    load_balancer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    location: Optional[ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notAfter'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notBefore'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    renewal_summary: Optional[LoadBalancerTLSCertificateRenewalSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSummary') }})
    resource_type: Optional[ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    revocation_reason: Optional[LoadBalancerTLSCertificateRevocationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revocationReason') }})
    revoked_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revokedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    signature_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureAlgorithm') }})
    status: Optional[LoadBalancerTLSCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAlternativeNames') }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportCode') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
