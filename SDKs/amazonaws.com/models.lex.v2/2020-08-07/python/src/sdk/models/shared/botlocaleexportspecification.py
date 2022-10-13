from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BotLocaleExportSpecification:
    bot_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botId' }})
    bot_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    locale_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localeId' }})
    
