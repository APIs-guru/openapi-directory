from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import command


@dataclass_json
@dataclass
class ListCommandsResult:
    commands: Optional[List[command.Command]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Commands' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
