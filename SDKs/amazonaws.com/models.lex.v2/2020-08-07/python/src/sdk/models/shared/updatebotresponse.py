from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botstatus_enum
from . import dataprivacy


@dataclass_json
@dataclass
class UpdateBotResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botName' }})
    bot_status: Optional[botstatus_enum.BotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botStatus' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_privacy: Optional[dataprivacy.DataPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPrivacy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    idle_session_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleSessionTTLInSeconds' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
