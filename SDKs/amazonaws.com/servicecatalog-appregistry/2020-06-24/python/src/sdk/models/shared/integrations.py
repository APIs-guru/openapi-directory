from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcegroup


@dataclass_json
@dataclass
class Integrations:
    resource_group: Optional[resourcegroup.ResourceGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGroup' }})
    
