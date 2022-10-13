from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetEntitiesRequest:
    ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceVersion' }})
    
