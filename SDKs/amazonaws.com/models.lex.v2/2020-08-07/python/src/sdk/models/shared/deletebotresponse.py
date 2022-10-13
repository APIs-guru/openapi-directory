from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import botstatus_enum


@dataclass_json
@dataclass
class DeleteBotResponse:
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_status: Optional[botstatus_enum.BotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botStatus' }})
    
