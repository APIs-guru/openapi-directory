from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteBotLocaleResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_locale_status: Optional[BotLocaleStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botLocaleStatus') }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    
