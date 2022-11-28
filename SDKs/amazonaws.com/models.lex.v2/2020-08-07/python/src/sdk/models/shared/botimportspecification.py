from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BotImportSpecification:
    r"""BotImportSpecification
    Provides the bot parameters required for importing a bot.
    """
    
    bot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('botName') }})
    data_privacy: DataPrivacy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPrivacy') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    bot_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botTags') }})
    idle_session_ttl_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleSessionTTLInSeconds') }})
    test_bot_alias_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testBotAliasTags') }})
    
