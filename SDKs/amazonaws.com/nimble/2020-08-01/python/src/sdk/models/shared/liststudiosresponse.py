from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import studio


@dataclass_json
@dataclass
class ListStudiosResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    studios: Optional[List[studio.Studio]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studios' }})
    
