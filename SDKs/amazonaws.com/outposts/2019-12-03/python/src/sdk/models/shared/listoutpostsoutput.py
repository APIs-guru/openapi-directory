from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import outpost


@dataclass_json
@dataclass
class ListOutpostsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    outposts: Optional[List[outpost.Outpost]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outposts' }})
    
