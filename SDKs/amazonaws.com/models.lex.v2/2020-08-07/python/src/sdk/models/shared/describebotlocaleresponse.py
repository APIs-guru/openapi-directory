from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import botlocalehistoryevent
from . import botlocalestatus_enum
from . import voicesettings


@dataclass_json
@dataclass
class DescribeBotLocaleResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_locale_history_events: Optional[List[botlocalehistoryevent.BotLocaleHistoryEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleHistoryEvents' }})
    bot_locale_status: Optional[botlocalestatus_enum.BotLocaleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleStatus' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    failure_reasons: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReasons' }})
    intents_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentsCount' }})
    last_build_submitted_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastBuildSubmittedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    locale_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeName' }})
    nlu_intent_confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nluIntentConfidenceThreshold' }})
    slot_types_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slotTypesCount' }})
    voice_settings: Optional[voicesettings.VoiceSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceSettings' }})
    
