from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BotLocaleExportSpecification:
    r"""BotLocaleExportSpecification
    Provides the bot locale parameters required for exporting a bot locale.
    """
    
    bot_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    bot_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    locale_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    
