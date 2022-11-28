from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BotAliasLocaleSettings:
    r"""BotAliasLocaleSettings
    Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    code_hook_specification: Optional[CodeHookSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeHookSpecification') }})
    
