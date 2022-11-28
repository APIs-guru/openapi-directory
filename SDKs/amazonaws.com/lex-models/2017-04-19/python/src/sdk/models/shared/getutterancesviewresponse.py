from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetUtterancesViewResponse:
    bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('botName') }})
    utterances: Optional[List[UtteranceList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utterances') }})
    
