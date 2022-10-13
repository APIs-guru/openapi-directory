from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botaliasstatus_enum


@dataclass_json
@dataclass
class DeleteBotAliasResponse:
    bot_alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasId' }})
    bot_alias_status: Optional[botaliasstatus_enum.BotAliasStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAliasStatus' }})
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    
