from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botlocalestatus_enum


@dataclass_json
@dataclass
class BuildBotLocaleResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_locale_status: Optional[botlocalestatus_enum.BotLocaleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleStatus' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    last_build_submitted_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastBuildSubmittedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    
