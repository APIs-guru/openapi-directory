from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UtteranceList:
    r"""UtteranceList
    Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.
    """
    
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botVersion') }})
    utterances: Optional[List[UtteranceData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utterances') }})
    
