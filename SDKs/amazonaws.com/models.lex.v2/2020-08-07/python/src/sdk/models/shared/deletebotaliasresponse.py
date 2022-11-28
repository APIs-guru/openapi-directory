from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteBotAliasResponse:
    bot_alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasId') }})
    bot_alias_status: Optional[BotAliasStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasStatus') }})
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    
