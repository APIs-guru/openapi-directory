from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resource


@dataclass_json
@dataclass
class RateLimit:
    api_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiContext' }})
    api_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiName' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    resources: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
