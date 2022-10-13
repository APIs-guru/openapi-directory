from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destination


@dataclass_json
@dataclass
class DescribeDestinationsResponse:
    destinations: Optional[List[destination.Destination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
