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
class RenewalSummary:
    r"""RenewalSummary
    Describes the status of a SSL/TLS certificate renewal managed by Amazon Lightsail.
    """
    
    domain_validation_records: Optional[List[DomainValidationRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainValidationRecords') }})
    renewal_status: Optional[RenewalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalStatus') }})
    renewal_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalStatusReason') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
