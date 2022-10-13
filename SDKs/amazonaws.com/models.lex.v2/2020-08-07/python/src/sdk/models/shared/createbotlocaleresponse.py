from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botlocalestatus_enum
from . import voicesettings


@dataclass_json
@dataclass
class CreateBotLocaleResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_locale_status: Optional[botlocalestatus_enum.BotLocaleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleStatus' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    locale_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeName' }})
    nlu_intent_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluIntentConfidenceThreshold' }})
    voice_settings: Optional[voicesettings.VoiceSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceSettings' }})
    
