from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SlotValueSelectionSetting:
    r"""SlotValueSelectionSetting
    Contains settings used by Amazon Lex to select a slot value.
    """
    
    resolution_strategy: SlotValueResolutionStrategyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolutionStrategy') }})
    regex_filter: Optional[SlotValueRegexFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexFilter') }})
    
