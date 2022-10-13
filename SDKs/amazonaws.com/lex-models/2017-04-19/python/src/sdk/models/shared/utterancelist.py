from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import utterancedata


@dataclass_json
@dataclass
class UtteranceList:
    bot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botVersion' }})
    utterances: Optional[List[utterancedata.UtteranceData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utterances' }})
    
