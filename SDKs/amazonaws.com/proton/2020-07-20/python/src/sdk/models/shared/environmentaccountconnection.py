from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import environmentaccountconnectionstatus_enum


@dataclass_json
@dataclass
class EnvironmentAccountConnection:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    environment_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentAccountId' }})
    environment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentName' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    management_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managementAccountId' }})
    requested_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    status: environmentaccountconnectionstatus_enum.EnvironmentAccountConnectionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
