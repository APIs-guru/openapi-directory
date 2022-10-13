from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReferrerTraffic:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    referrer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrer' }})
    uniques: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniques' }})
    
