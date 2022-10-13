from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import loadbalancertlscertificatedomainvalidationrecord
from . import loadbalancertlscertificatefailurereason_enum
from . import resourcelocation
from . import loadbalancertlscertificaterenewalsummary
from . import resourcetype_enum
from . import loadbalancertlscertificaterevocationreason_enum
from . import loadbalancertlscertificatestatus_enum
from . import tag


@dataclass_json
@dataclass
class LoadBalancerTLSCertificate:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    domain_validation_records: Optional[List[loadbalancertlscertificatedomainvalidationrecord.LoadBalancerTLSCertificateDomainValidationRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainValidationRecords' }})
    failure_reason: Optional[loadbalancertlscertificatefailurereason_enum.LoadBalancerTLSCertificateFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    is_attached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAttached' }})
    issued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    key_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyAlgorithm' }})
    load_balancer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerName' }})
    location: Optional[resourcelocation.ResourceLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    not_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    renewal_summary: Optional[loadbalancertlscertificaterenewalsummary.LoadBalancerTLSCertificateRenewalSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalSummary' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    revocation_reason: Optional[loadbalancertlscertificaterevocationreason_enum.LoadBalancerTLSCertificateRevocationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revocationReason' }})
    revoked_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revokedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    signature_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureAlgorithm' }})
    status: Optional[loadbalancertlscertificatestatus_enum.LoadBalancerTLSCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    subject_alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeNames' }})
    support_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportCode' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
