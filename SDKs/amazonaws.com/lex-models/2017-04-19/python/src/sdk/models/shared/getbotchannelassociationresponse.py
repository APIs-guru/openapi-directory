from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import channelstatus_enum
from . import channeltype_enum


@dataclass_json
@dataclass
class GetBotChannelAssociationResponse:
    bot_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAlias' }})
    bot_configuration: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botConfiguration' }})
    bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botName' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[channelstatus_enum.ChannelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[channeltype_enum.ChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
