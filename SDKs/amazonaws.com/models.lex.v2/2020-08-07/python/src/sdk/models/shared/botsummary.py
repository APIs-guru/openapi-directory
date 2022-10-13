from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botstatus_enum


@dataclass_json
@dataclass
class BotSummary:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botName' }})
    bot_status: Optional[botstatus_enum.BotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botStatus' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latest_bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestBotVersion' }})
    
