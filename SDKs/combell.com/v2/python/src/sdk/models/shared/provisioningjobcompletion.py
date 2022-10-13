from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProvisioningJobCompletion:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    resource_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_links' }})
    
