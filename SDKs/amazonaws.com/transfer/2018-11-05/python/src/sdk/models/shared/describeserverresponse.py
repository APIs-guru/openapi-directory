from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import describedserver


@dataclass_json
@dataclass
class DescribeServerResponse:
    server: describedserver.DescribedServer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Server' }})
    
