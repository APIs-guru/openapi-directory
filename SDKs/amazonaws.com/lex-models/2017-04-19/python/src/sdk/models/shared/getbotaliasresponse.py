from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import conversationlogsresponse


@dataclass_json
@dataclass
class GetBotAliasResponse:
    bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botName' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    conversation_logs: Optional[conversationlogsresponse.ConversationLogsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationLogs' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
