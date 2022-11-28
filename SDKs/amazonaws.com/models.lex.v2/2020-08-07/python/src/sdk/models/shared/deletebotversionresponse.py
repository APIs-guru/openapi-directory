from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteBotVersionResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_status: Optional[BotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botStatus') }})
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    
