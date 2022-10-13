from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import createaccountfailurereason_enum
from . import createaccountstate_enum


@dataclass_json
@dataclass
class CreateAccountStatus:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountName' }})
    completed_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[createaccountfailurereason_enum.CreateAccountFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    gov_cloud_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GovCloudAccountId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    requested_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[createaccountstate_enum.CreateAccountStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
