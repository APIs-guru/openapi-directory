from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccessTokenTypeEnum(str, Enum):
    USER_ACCOUNT = "UserAccount"
    USER_PROFILE = "UserProfile"


@dataclass_json
@dataclass
class AccessToken:
    expiration_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    refreshable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshable') }})
    type: AccessTokenTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    account_created: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountCreated') }})
    
