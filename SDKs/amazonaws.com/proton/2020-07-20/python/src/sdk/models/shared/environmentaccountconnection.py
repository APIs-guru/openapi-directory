from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentAccountConnection:
    r"""EnvironmentAccountConnection
    The environment account connection detail data.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    environment_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountId') }})
    environment_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentName') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_modified_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    management_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementAccountId') }})
    requested_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    status: EnvironmentAccountConnectionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
