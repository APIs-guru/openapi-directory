from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import server


@dataclass_json
@dataclass
class DescribeServersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    servers: Optional[List[server.Server]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Servers' }})
    
