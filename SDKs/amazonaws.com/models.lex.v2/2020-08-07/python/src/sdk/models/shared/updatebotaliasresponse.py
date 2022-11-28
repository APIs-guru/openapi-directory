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
class UpdateBotAliasResponse:
    bot_alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasId') }})
    bot_alias_locale_settings: Optional[dict[str, BotAliasLocaleSettings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasLocaleSettings') }})
    bot_alias_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasName') }})
    bot_alias_status: Optional[BotAliasStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasStatus') }})
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    conversation_log_settings: Optional[ConversationLogSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationLogSettings') }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sentiment_analysis_settings: Optional[SentimentAnalysisSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentAnalysisSettings') }})
    
