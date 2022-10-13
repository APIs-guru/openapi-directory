from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botlocalestatus_enum


@dataclass_json
@dataclass
class BotLocaleSummary:
    bot_locale_status: Optional[botlocalestatus_enum.BotLocaleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleStatus' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_build_submitted_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastBuildSubmittedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    locale_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeName' }})
    
