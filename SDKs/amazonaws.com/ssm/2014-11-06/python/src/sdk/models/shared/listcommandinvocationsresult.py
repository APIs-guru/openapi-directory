from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import commandinvocation


@dataclass_json
@dataclass
class ListCommandInvocationsResult:
    command_invocations: Optional[List[commandinvocation.CommandInvocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommandInvocations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
