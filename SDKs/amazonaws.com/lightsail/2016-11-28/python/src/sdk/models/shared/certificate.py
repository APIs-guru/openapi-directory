from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domainvalidationrecord
from . import renewalsummary
from . import certificatestatus_enum
from . import tag


@dataclass_json
@dataclass
class Certificate:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    domain_validation_records: Optional[List[domainvalidationrecord.DomainValidationRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainValidationRecords' }})
    eligible_to_renew: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligibleToRenew' }})
    in_use_resource_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inUseResourceCount' }})
    issued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    issuer_ca: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuerCA' }})
    key_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyAlgorithm' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    renewal_summary: Optional[renewalsummary.RenewalSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalSummary' }})
    request_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestFailureReason' }})
    revocation_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revocationReason' }})
    revoked_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revokedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    status: Optional[certificatestatus_enum.CertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeNames' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
