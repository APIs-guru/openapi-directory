from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import botstatus_enum
from . import dataprivacy


@dataclass_json
@dataclass
class DescribeBotVersionResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botName' }})
    bot_status: Optional[botstatus_enum.BotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botStatus' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_privacy: Optional[dataprivacy.DataPrivacy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPrivacy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    failure_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReasons' }})
    idle_session_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleSessionTTLInSeconds' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
