from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botaliaslocalesettings
from . import botaliasstatus_enum
from . import conversationlogsettings
from . import sentimentanalysissettings


@dataclass_json
@dataclass
class CreateBotAliasResponse:
    bot_alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasId' }})
    bot_alias_locale_settings: Optional[dict[str, botaliaslocalesettings.BotAliasLocaleSettings]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasLocaleSettings' }})
    bot_alias_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasName' }})
    bot_alias_status: Optional[botaliasstatus_enum.BotAliasStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasStatus' }})
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    conversation_log_settings: Optional[conversationlogsettings.ConversationLogSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationLogSettings' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    sentiment_analysis_settings: Optional[sentimentanalysissettings.SentimentAnalysisSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysisSettings' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
