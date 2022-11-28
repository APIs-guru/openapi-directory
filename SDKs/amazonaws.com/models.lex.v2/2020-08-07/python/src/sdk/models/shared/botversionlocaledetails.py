from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BotVersionLocaleDetails:
    r"""BotVersionLocaleDetails
    The version of a bot used for a bot locale.
    """
    
    source_bot_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceBotVersion') }})
    
