from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import describedaccess


@dataclass_json
@dataclass
class DescribeAccessResponse:
    access: describedaccess.DescribedAccess = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Access' }})
    server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    
