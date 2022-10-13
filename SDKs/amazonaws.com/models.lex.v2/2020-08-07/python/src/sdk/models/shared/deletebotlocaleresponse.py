from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botlocalestatus_enum


@dataclass_json
@dataclass
class DeleteBotLocaleResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_locale_status: Optional[botlocalestatus_enum.BotLocaleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botLocaleStatus' }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    
