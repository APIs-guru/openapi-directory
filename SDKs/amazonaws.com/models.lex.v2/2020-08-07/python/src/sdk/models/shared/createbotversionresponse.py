from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botstatus_enum
from . import botversionlocaledetails


@dataclass_json
@dataclass
class CreateBotVersionResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_status: Optional[botstatus_enum.BotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botStatus' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    bot_version_locale_specification: Optional[dict[str, botversionlocaledetails.BotVersionLocaleDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersionLocaleSpecification' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
