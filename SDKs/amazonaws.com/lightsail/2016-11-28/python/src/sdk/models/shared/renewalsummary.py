from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import domainvalidationrecord
from . import renewalstatus_enum


@dataclass_json
@dataclass
class RenewalSummary:
    domain_validation_records: Optional[List[domainvalidationrecord.DomainValidationRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainValidationRecords' }})
    renewal_status: Optional[renewalstatus_enum.RenewalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalStatus' }})
    renewal_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalStatusReason' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
