from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClusterEndpoint:
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoint' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Region' }})
    
