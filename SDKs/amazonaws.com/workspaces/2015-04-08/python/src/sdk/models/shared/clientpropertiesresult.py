from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clientproperties


@dataclass_json
@dataclass
class ClientPropertiesResult:
    client_properties: Optional[clientproperties.ClientProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientProperties' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
