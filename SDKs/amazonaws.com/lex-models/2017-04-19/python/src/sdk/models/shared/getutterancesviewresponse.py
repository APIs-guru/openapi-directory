from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import utterancelist


@dataclass_json
@dataclass
class GetUtterancesViewResponse:
    bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botName' }})
    utterances: Optional[List[utterancelist.UtteranceList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utterances' }})
    
