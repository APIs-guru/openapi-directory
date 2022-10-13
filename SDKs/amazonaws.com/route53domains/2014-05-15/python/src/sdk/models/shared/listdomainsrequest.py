from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListDomainsRequest:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    max_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxItems' }})
    
