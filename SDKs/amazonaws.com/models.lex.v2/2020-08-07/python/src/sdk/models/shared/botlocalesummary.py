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
class BotLocaleSummary:
    r"""BotLocaleSummary
    Summary information about bot locales returned by the <a>ListBotLocales</a> operation.
    """
    
    bot_locale_status: Optional[BotLocaleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleStatus') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_build_submitted_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastBuildSubmittedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    locale_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeName') }})
    
