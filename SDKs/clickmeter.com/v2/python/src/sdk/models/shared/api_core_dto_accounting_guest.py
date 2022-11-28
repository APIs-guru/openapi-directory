from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class APICoreDtoAccountingGuestTimeFormatEnum(str, Enum):
    AM_PM = "AmPm"
    H24 = "H24"


@dataclass_json
@dataclass
class APICoreDtoAccountingGuest:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }, 'form': { 'field_name': 'apiKey' }})
    conversion_options: Optional[APICoreDtoAccountingConversionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionOptions') }, 'form': { 'field_name': 'conversionOptions' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }, 'form': { 'field_name': 'creationDate' }})
    current_grant: Optional[APICoreDtoGrantsGrant] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentGrant') }, 'form': { 'field_name': 'currentGrant' }})
    date_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateFormat') }, 'form': { 'field_name': 'dateFormat' }})
    decimal_separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalSeparator') }, 'form': { 'field_name': 'decimalSeparator' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }, 'form': { 'field_name': 'email' }})
    extended_grants: Optional[APICoreDtoAccountingExtendedGrants] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedGrants') }, 'form': { 'field_name': 'extendedGrants' }})
    group_grants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupGrants') }, 'form': { 'field_name': 'groupGrants' }})
    hit_options: Optional[APICoreDtoAccountingHitOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hitOptions') }, 'form': { 'field_name': 'hitOptions' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }, 'form': { 'field_name': 'id' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }, 'form': { 'field_name': 'key' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }, 'form': { 'field_name': 'language' }})
    login_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginCount') }, 'form': { 'field_name': 'loginCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }, 'form': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }, 'form': { 'field_name': 'notes' }})
    number_group_separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberGroupSeparator') }, 'form': { 'field_name': 'numberGroupSeparator' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }, 'form': { 'field_name': 'password' }})
    time_format: Optional[APICoreDtoAccountingGuestTimeFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeFormat') }, 'form': { 'field_name': 'timeFormat' }})
    time_zone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }, 'form': { 'field_name': 'timeZone' }})
    timeframe_min_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeframeMinDate') }, 'form': { 'field_name': 'timeframeMinDate' }})
    timezonename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezonename') }, 'form': { 'field_name': 'timezonename' }})
    tl_grants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlGrants') }, 'form': { 'field_name': 'tlGrants' }})
    tp_grants: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tpGrants') }, 'form': { 'field_name': 'tpGrants' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }, 'form': { 'field_name': 'userName' }})
    
