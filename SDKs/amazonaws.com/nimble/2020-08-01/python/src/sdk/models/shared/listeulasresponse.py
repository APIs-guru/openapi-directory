from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eula


@dataclass_json
@dataclass
class ListEulasResponse:
    eulas: Optional[List[eula.Eula]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eulas' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
