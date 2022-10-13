from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import domainstatus_enum


@dataclass_json
@dataclass
class DescribeDomainResponse:
    acm_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcmCertificateArn' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    domain_status: Optional[domainstatus_enum.DomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainStatus' }})
    
