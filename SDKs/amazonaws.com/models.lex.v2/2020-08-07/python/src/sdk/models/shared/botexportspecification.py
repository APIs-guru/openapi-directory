from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BotExportSpecification:
    bot_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    
