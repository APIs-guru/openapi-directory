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
class SettingDataModel:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorEmail') }})
    creator_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorFullName') }})
    expiration_warning_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationWarningAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hint') }})
    is_watching: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isWatching') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerEmail') }})
    owner_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerFullName') }})
    setting_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingId') }})
    setting_type: Optional[SettingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingType') }})
    
