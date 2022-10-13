from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import requeststatus_enum


@dataclass_json
@dataclass
class RequestedServiceQuotaChange:
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaseId' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    desired_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredValue' }})
    global_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalQuota' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    quota_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuotaArn' }})
    quota_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuotaCode' }})
    quota_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuotaName' }})
    requester: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Requester' }})
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCode' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    status: Optional[requeststatus_enum.RequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    
