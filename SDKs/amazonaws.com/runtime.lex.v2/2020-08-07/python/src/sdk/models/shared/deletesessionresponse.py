from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteSessionResponse:
    bot_alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botAliasId') }})
    bot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botId') }})
    locale_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localeId') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    
