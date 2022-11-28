from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RequestedServiceQuotaChange:
    r"""RequestedServiceQuotaChange
    Information about a quota increase request.
    """
    
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaseId') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    desired_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredValue') }})
    global_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalQuota') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    quota_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaArn') }})
    quota_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaCode') }})
    quota_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaName') }})
    requester: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Requester') }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCode') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    status: Optional[RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    
